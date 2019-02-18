const express = require('express')
const Sqlite = require('sqlite3').verbose()
const db = require('../database/dbIndex.js')
const PORT = process.env.PORT || 3001
const app = express()

app.get('/products/:prodId', (req, res) => {
  let pics = null
  let reviews = null
  console.log(req.params.prodId)
  console.log(db)

  db.all(`select * from reviews where prod_id = ? ORDER BY helpfulCount DESC LIMIT 8`, req.params.prodId, (err, rows) => {
      if (err) {
        console.log(err)
      } else {
        console.log('successfully got pictures from db to index.js')
        pics = rows
      }
    })

  db.all(`select p.review_id, p.picUrl from reviews r INNER JOIN pictures p ON r.id = p.review_id where r.prod_id = ? ORDER BY r.helpfulCount DESC LIMIT 4`, req.params.prodId, (err, rows) => {
      if (err) {
        console.error(err)
      } else {
        reviews = rows
      }
  })

  const ratingsByStars = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, total: 0}
  db.each('SELECT stars FROM reviews', (err, {stars}) => {
    ratingsByStars[stars]++
  },
  (err, rowCount) => {
    if (err) console.error(err)
    else ratingsByStars.total = rowCount
  })

  // stats (ave rating, % for each num of stars, num of reviews)
  let aveRating = 0
  for (let key in ratingsByStars) {
    const count = ratingsByStars[key]
    aveRating += (count * key)
  }
  aveRating = (aveRating / ratingsByStars.total).toFixed(1)
  ratingsByStars.ave = aveRating
  
  res.send({reviews: reviews, pics: pics, stats: ratingsByStars})
})

// app.get('/products/:prodId/:revId')

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})