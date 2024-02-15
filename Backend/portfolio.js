const express = require('express')
const app = express()
const cors = require('cors')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  },
})
const upload = multer({ storage: storage })
const { Controller } = require('./controller.js')
const { Products } = require('./products.js')
const jwtToken = require('./token.js')
const payment = require('./payment.js')
const controller = new Controller()
const products = new Products()
// const port = process.env.PORT || 3001

app.use(express.json());
app.use(cors({ origin: '*' }))


app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running in ${process.env.PORT || 3001}`);
})

app.get('/', (req, res) => {
  res.json({ status: 200, message: 'Welcome to Portfolio API' })
})

app.get('/generate-token/:email', jwtToken.generate_token, (req, res) => { })

app.get('/verify-token', jwtToken.verify_token, (req, res) => { })

app.get('/users', controller.user, (req, res) => { })

app.post('/login', controller.dynamic_data, controller.login, (req, res, next) => { })

app.post('/register', controller.dynamic_data, controller.register, (req, res, next) => { })

app.post('/contact', controller.dynamic_data, controller.contact, (req, res, next) => { })

app.get('/get_contacts', controller.getContact, (req, res, next) => { })

app.get('/products', products.products, (req, res) => { })

app.get('/products/:id', products.products, (req, res) => { })

app.get('/search', products.search, (req, res) => { })

app.get('/download/:filename', products.download, (req, res) => { })

////////////////////////////// ADMIN SIDE ////////////////////////////////

app.post('/products', upload.single('zipfile'), controller.dynamic_data, products.add_product, (req, res) => { })

app.post('/status', controller.dynamic_data, products.status, (req, res) => { })

app.post('/order', payment.create_order, (req, res) => { });

app.get('/all', payment.fetch_order, (req, res) => { });

app.get('/get_order/:order_id', payment.fetch_single_order, (req, res) => { });