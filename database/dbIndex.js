const Sqlite = require('sqlite3').verbose()

const db = new Sqlite.Database('db.fakeData', (err) => {
  if (err) console.err(err)
  else console.log('connected to DB in dbIndex.js')
})

const rowCount = db.get('SELECT COUNT(*) FROM products', (err, row) => {
  if (err || row === 0) {
    console.log('count: ', row)
    const makeAndPopulateDb = require('./makeAndPopulateDb')
    makeAndPopulateDb()
  } 
}) 

module.exports = db