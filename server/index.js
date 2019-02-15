const express = require('express')
const Sqlite = require('better-sqlite3')
const db = require('../database/dbIndex.js')
const PORT = process.env.PORT || 3001
const app = express()

app.get('/products/:prodId', (req, res) => {
  /*
  const reviews = db.prepare(`select * from reviews where prod_id = ? ORDER BY helpfulCount DESC LIMIT 8`).all(req.params.prodId)

  const pics = db.prepare(`select p.review_id, p.picUrl from reviews r INNER JOIN pictures p ON r.id = p.review_id where r.prod_id = ? ORDER BY r.helpfulCount DESC LIMIT 4`).all(req.params.prodId)

  db.aggregate('ratingsByStars', {
    start: {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, total: 0},
    step: (counter, val) => {
      counter[val]++,
      counter.total++
      return counter
    },
    result: (counter) => (JSON.stringify(counter))
  })
  const ratingsByStars = JSON.parse(db.prepare('SELECT ratingsByStars(stars) FROM reviews').pluck().get())

  // stats (ave rating, % for each num of stars, num of reviews)
  const aveRating = 0
  for (let key in ratingsByStars) {
    const count = ratingsByStars[key]
    aveRating += (count * key)
  }
  aveRating = (aveRating / ratingsByStars.total).toFixed(1)
  ratingsByStars.ave = aveRating
  */
  res.sendStatus(200/*'{reviews: reviews, pics: pics, stats: ratingsByStars}'*/)
})

// app.get('/products/:prodId/:revId')

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})