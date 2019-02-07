const Sqlite = require('better-sqlite3')
const faker = require('faker')

const db = new Sqlite('../../Database/fakeData.db')

/*
  create schema if not exists
*/

const insertProd = db.prepare('INSERT INTO products (name) VALUES (?)')
const insertRev = db.prepare('INSERT INTO reviews (prod_id, username, stars, title, verifiedPurchase, helpfulCount, body, avatarLink, picLinks, videoLinks, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
const insertCom = db.prepare('INSERT INTO comments (username, ref_comment_id, review_id, body, date) VALUES (?, ?, ?, ?, ?)')

const /* select ids prepare statements*/

for (let i = 1; i <= 100; i++){
  // insert product name
  const prodName = faker.commerce.productName()
  insertProd.run(prodName)

  // insert rand # of reviews between 0 and 20 for each product
  const reviewCount = Math.floor(Math.random() * 21)
  for (let j = 1; j < reviewCount; j++) {
    const username = faker.name.findName()
    const stars = Math.floor(Math.random() * 6)
    const title = faker.hacker.phrase()
    const verifiedPurchase = Math.floor(Math.random() * 2)
    const helpfulCount = Math.floor(Math.random() * 59)
    const avatarLink = faker.image.avatar()
    const date = faker.date.past(10)
    const body = faker.lorem.paragraph(Math.floor(Math.random() * 8) + 1)
    // low probability of having user-supplied pics or video in review; add up to 5 pics and/or one video
    const prodPicLinks = ''
    if (Math.random() >= 0.9) {
      for (let i = 0; i < Math.floor(Math.random() * 6); i ++) {
        prodPicLinks += faker.image.image(Math.floor(Math.random() * 60) + 80, 88) + ', '
      }
    }
    const prodVideoLinks = ''
    if (Math.random() >= 0.9) {
      prodVideoLinks += 'https://www.youtube.com/watch?v=NpEaa2P7qZI'
    }

    insertRev.run(i, /* i == prod_id */ username, stars, title, verifiedPurchase, helpfulCount, body, avatarLink, picLinks, videoLinks, date)

    // insert rand # of comments between 0 and 4 for each review
    const commentCount = Math.floor(Math.random() * 5)
    for (let k = 1; k < reviewCount; k++) {

      insertCom.run()
    }
  }
}