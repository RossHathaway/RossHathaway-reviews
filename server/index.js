const express = require('express')
const Sqlite = require('sqlite3').verbose()
const db = require('../database/dbIndex.js')
const morgan = require('morgan')
const PORT = process.env.PORT || 3001
const app = express()

app.use(morgan('dev'))

app.get('/products/:prodId/:recent', (req, res) => {
  let pics = null
  let reviews = null
  let ratingsByStars = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, total: 0}
  db.serialize(() => {
    db.all(`select * from reviews AS r where prod_id = ? ORDER BY ${req.params.recent ? 'r.revDate' : 'r.helpfulCount'} DESC LIMIT 8`, req.params.prodId, (err, rows) => {
        if (err) {
          console.log(err)
        } else {
          reviews = rows
        }
      })
      .all(`select p.review_id, p.picUrl from reviews AS r INNER JOIN pictures AS p ON r.id = p.review_id WHERE r.prod_id = ? ORDER BY helpfulCount DESC LIMIT 4`, req.params.prodId, (err, rows) => {
          if (err) {
            console.error(err)
          } else {
            pics = rows
          }
      })
      .each('SELECT stars FROM reviews WHERE reviews.prod_id = ?', req.params.prodId, (err, {stars}) => {
        ratingsByStars[stars]++
      },
      (err, rowCount) => {
        if (err) console.error(err)
        else {
          ratingsByStars.total = rowCount
          let aveRating = 0
          for (let key in ratingsByStars) {
            const count = ratingsByStars[key]
            if (key !== 'total') {
              let numKey = Number(key)
              console.log('type of converted key', typeof numKey, numKey)
              aveRating += (count * numKey)
            }
          }
          console.log('aveRating', aveRating)
          aveRating = (aveRating / ratingsByStars.total).toFixed(1)
          ratingsByStars.ave = aveRating
          
          res.status(200).send({reviews: reviews, pics: pics, stats: ratingsByStars})
        }
      })
    })
  })  

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})