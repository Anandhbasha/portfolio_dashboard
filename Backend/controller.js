const connection = require('./connection.js')
const jwtToken = require('./token.js')

class Controller {
  contact(req, res, next) {
    connection.query('INSERT INTO `contact` SET ?', req.data, (error) => {
      if (error) return res.status(500).json({ status: 500, message: error })
      else return res.status(200).json({ status: 200, message: 'Enquiry Submitted' })
    })
  }

  register(req, res, next) {
    const data = req.data;
    connection.query('SELECT * FROM `users` WHERE email = ?', data.email, (error, results) => {
        if (error) {
            return res.status(500).json({ status: 500, message: error });
        } else if (results.length > 0) {
            return res.status(409).json({ status: 409, message: 'Email already exists' });
        } else {
            data.token = jwtToken.token(req.body.email)
            connection.query('INSERT INTO `users` SET ?', data, (error) => {
                if (error) return res.status(500).json({ status: 500, message: error })
                else return res.status(200).json({ status: 200, message: 'User Created Successfully' })
            });
        }
    });
  }

  login(req, res, next) {
    const data = req.data;
    connection.query('SELECT * FROM `users` WHERE email=?', data.email, (error, results) => {
        if (error) return res.status(500).json({ status: 500, message: error })
        else if (results.length > 0)
          connection.query('SELECT * FROM `users` WHERE email=? AND password=?', [data.email, data.password], (error, count) => {
            if (error) return res.status(500).json({ status: 500, message: error })
            else if (count.length > 0) {
              let [user] = results
              let Tokenstatus = jwtToken.verify(user.token)
              if(Tokenstatus == "jwt expired"){
                Tokenstatus = jwtToken.token(data.email)
                connection.query('UPDATE `users` SET token=? WHERE email=?', [Tokenstatus, data.email])
              }
              return res.status(200).json({ status: 200, message: Tokenstatus })
            } else return res.status(400).json({ status: 400, message: 'Kindly check your password' });
          })
        else return res.status(404).json({ status: 404, message: 'Email not exists' });
    });
  }

  user(req, res, next){
    connection.query('SELECT name, email FROM `users` WHERE user_type = "u"', (error, results) => {
      if (error) return res.status(500).json({ status: 500, message: error })
      else if (results.length > 0) return res.status(200).json({ status: 200, data: results })
      else return res.status(404).json({ status: 404, data: "No user found" })
    })
  }

  dynamic_data(req, res, next) {
    let data = {}
    Object.keys(req.body).forEach(key => {
        data[key] = req.body[key];
    });
    req.data = data;
    next()
  }
}

module.exports = { Controller }
