import db from '../config/database.js'

// Get All Users
export const getUsers = (result) => {
  db.query('SELECT * FROM login', (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

export const insertUser = (data, result) => {
  db.query('INSERT INTO login SET ?', [data], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}

export const verifyUser = (data, result) => {
  const sql_stmt = 'SELECT * FROM login WHERE username = ? AND password = ?'

  db.query(sql_stmt, [data.username, data.password], (err, results) => {
    if (err) {
      console.log(err)
      result(err, null)
    } else {
      result(null, results)
    }
  })
}
