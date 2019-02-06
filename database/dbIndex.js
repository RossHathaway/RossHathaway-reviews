const sqlite = require('sqlite3').verbose()
const faker = require('faker')

const db = new sqlite.Database('../../Database/fakeData.db', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('connected to fakeData.db')
  }
})

/*
  create schema if not exists
*/

/*
  create fake data arrays to choose from
*/


for (let i = 1; i <= 100; i++){
  // insert product name
  const prodName = faker.commerce.productName()
  db.run('')

  // insert rand # of reviews between 0 and 20 for each product
  const reviewCount = Math.floor(Math.random() * 21)
  for (let i = 1; i < reviewCount; i++) {
    const username = faker.name.findName()
    const stars = Math.floor(Math.random() * 6)
    const title = faker.
    db.run()

    // insert rand # of comments between 0 and 4 for each review
    const reviewCount = Math.floor(Math.random() * 21)
    for (let i = 1; i < reviewCount; i++) {
      db.run()
    }
}
}