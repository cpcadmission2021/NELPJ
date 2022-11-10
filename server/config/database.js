//creating connection to the database

import mysql from 'mysql2'

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sample',
})

export default db
