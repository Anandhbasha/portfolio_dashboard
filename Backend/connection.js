const mysql = require('mysql2')
require('dotenv').config();

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  // password: 'admin123',
  // password: '@nand#@123',
  database: 'portfolio',
})

con.connect((error) => {
  if (error) console.error('Database Connection error: ', error)
  else console.log('Database Connected')
})

module.exports = con