const Sqlite = require('better-sqlite3')
const faker = require('faker')
const fs = require('fs')
const path = require('path')

const db = new Sqlite('./db.fakeData')

const makeTables = fs.readFileSync(path.join(__dirname, './schema.sql'), 'utf8');
db.exec(makeTables);

const insertProd = db.prepare('INSERT INTO products (name) VALUES (?)')
const insertRev = db.prepare('INSERT INTO reviews (prod_id, username, stars, title, verifiedPurchase, helpfulCount, body, avatarLink, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)')
const insertCom = db.prepare('INSERT INTO comments (username, ref_comment_id, review_id, body, date) VALUES (?, ?, ?, ?, ?)')
const insertPic = db.prepare('INSERT INTO pictures (review_id, url) VALUES (?, ?)')
const insertVid = db.prepare('INSERT INTO videos (review_id, url) VALUES (?, ?)')
/*
CREATE TABLE IF NOT EXISTS pictures(id INTEGER PRIMARY KEY, review_id INTEGER, url TEXT, FOREIGN KEY (review_id) REFERENCES reviews (id));

CREATE TABLE IF NOT EXISTS videos(id INTEGER PRIMARY KEY, review_id INTEGER, url TEXT, FOREIGN KEY (review_id) REFERENCES reviews (id));
*/

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
    const date = JSON.stringify(faker.date.past(10))
    const body = faker.lorem.paragraph(Math.floor(Math.random() * 8) + 1)
    // low probability of having user-supplied pics or video in review; add up to 5 pics and/or one video to their respective tables
    
   // INSERT INTO reviews (prod_id, username, stars, title, verifiedPurchase, helpfulCount, body, avatarLink, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    const {lastInsertRowid} = insertRev.run(i, /* i == prod_id */ username, stars, title, verifiedPurchase, helpfulCount, body, avatarLink, date)

    // insert pics and videos into their own tables (low probability of doing this)
    if (Math.random() >= 0.9) {
      for (let i = 0; i < Math.floor(Math.random() * 6); i ++) {
        const url = faker.image.image(Math.floor(Math.random() * 60) + 80, 88)
        insertPic(lastInsertRowid, url)
      }
    }
    if (Math.random() >= 0.9) {
      insertPic(lastInsertRowid, 'https://www.youtube.com/watch?v=NpEaa2P7qZI')
    }

    // insert rand # of comments between 1 and 10 for each review
    const commentCount = Math.floor(Math.random() * 10) + 1
    for (let k = 1; k < commentCount; k++) {
      // (username, ref_comment_id, review_id, body, date)
      const username = faker.name.findName()
      const review_id = lastInsertRowid
      const comDate = JSON.stringify(faker.date.between(date.slice(0, 10), `${Date.now().getFullYear()}-${Date.now().getMonth() + 1}-${Date.now().getDate()}`))
      const body = faker.lorem.paragraph(Math.floor(Math.random() * 5) + 1)

      const {lastInsertRowid: ref_comment_id} = insertCom.run(username, 'null', review_id, comDate, body)
      // low probability of having a comment reference another comment
      if (Math.random() >= 0.9) {
        // add 1 - 5 comments
        const commentCount = Math.floor(Math.random() * 5) + 1
        for (let k = 1; k < commentCount; k++) {
          // (username, ref_comment_id, review_id, body, date)
          const username = faker.name.findName()
          const review_id = lastInsertRowid
          const comDate = JSON.stringify(faker.date.between(date.slice(0, 10), `${Date.now().getFullYear()}-${Date.now().getMonth() + 1}-${Date.now().getDate()}`))
          const body = faker.lorem.paragraph(Math.floor(Math.random() * 5) + 1)
          // all reference same comment - save previously inserted id from outside if block
          insertCom.run(username, ref_comment_id, review_id, comDate, body)
          }
        }
    }
  }
}