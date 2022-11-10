//filtering data before saving to the data base.

// Import function from User Model
import { getUsers, insertUser, verifyUser } from '../model/User.js'
//

// Get All Users
export const showUsers = (req, res) => {
  getUsers((err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

//Insert User
export const createUser = (req, res) => {
  const data = {
    username: username,
    password: 12345678,
    member_id: member_id,
  }
  insertUser(data, (err, results) => {
    if (err) {
      res.send(err)
    } else {
      res.json(results)
    }
  })
}

export const userLogin = (req, res) => {
  const data = {
    username: req.body.userName,
    password: req.body.password,
    // res.send(`Username: ${username} Password: ${password}`)
    // res.json(username: req.body.username),

    // res.send(`${username} . ${password}`),
    // res.send('succesful login'),
  }

  verifyUser(data, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.json(result), res.send('successful login')
    }
  })
}

export const memberHome = (req, res) => {
  const data = {
    username: req.body.username,
    password: req.body.password,
    // if (this.username == 'admin' && this.password == 'admin'){
    //   return 1;

    // }
    // else{
    //   return 0;
    // }
  }
  if (this.username === 'admin' && this.password === 'admin') {
    console.log('admin on login')
    return 1
  } else {
    console.log('other')
    return 0
  }

  // res.send('hi')
}
