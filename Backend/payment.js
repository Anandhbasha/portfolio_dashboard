const Razorpay = require('razorpay')
require('dotenv').config()
const razorpayInstance = new Razorpay({
  key_id: process.env.key_id,
  key_secret: process.env.key_secret,
})

function create_order(req, res) {
  let amount = parseInt(req.body.amount * 100, 10)
  razorpayInstance.orders.create({ amount, currency: "INR", payment_capture: 1 }, (err, data) => {
      if (data) res.status(200).json({ status: 200, data: data })
      else res.status(400).json({ status: 400, error: err })
  })
}

function fetch_order(req, res){
  let order_id = req.body.order_id
  razorpayInstance.orders.fetch(order_id, (err, data)=>{
    if (data && data.status == "paid") {
      connection.query('INSERT INTO `purchase` SET ?', data, (error) => {
        if (error) return res.status(500).json({ status: 500, message: error })
        else return res.status(200).json({ status: 200, message: 'Payment Completed Successfully' })
      });
    } else {
      res.status(400).json({ status: 400, error: err })
    }
  })
}

module.exports = { create_order, fetch_order }
