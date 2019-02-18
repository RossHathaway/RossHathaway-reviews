const express = require('express')
const Sqlite = require('sqlite3').verbose()
const db = require('../database/dbIndex.js')
const morgan = require('morgan')
const PORT = process.env.PORT || 3001
const app = express()

app.use(morgan)

app.get('/products/:prodId/:recent', (req, res) => {
  let pics = null
  let reviews = null
  let ratingsByStars = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, total: 0}
  // console.log(req.params.prodId)
  // console.log(db)
  db.all(`select * from reviews where prod_id = ? ORDER BY ${req.params.recent ? 'r.revDate' : 'r.helpfulCount'} DESC LIMIT 8`, req.params.prodId, (err, rows) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Rows: ', rows)
        console.log('successfully got pictures from db to index.js')
        pics = rows
      }
    })
    .all(`select p.review_id, p.picUrl from reviews r INNER JOIN pictures p ON r.id = p.review_id where r.prod_id = ? ORDER BY helpfulCount DESC LIMIT 4`, req.params.prodId, (err, rows) => {
        if (err) {
          console.error(err)
        } else {
          reviews = rows
        }
    })
    .each('SELECT stars FROM reviews', (err, {stars}) => {
      ratingsByStars[stars]++
    },
    (err, rowCount) => {
      if (err) console.error(err)
      else {
        ratingsByStars.total = rowCount
        let aveRating = 0
        for (let key in ratingsByStars) {
          const count = ratingsByStars[key]
          aveRating += (count * key)
        }
        aveRating = (aveRating / ratingsByStars.total).toFixed(1)
        ratingsByStars.ave = aveRating
        
        res.send({reviews: reviews, pics: pics, stats: ratingsByStars})
      }
    })
  })  


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})