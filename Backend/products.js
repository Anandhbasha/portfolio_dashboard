const connection = require('./connection.js')
const jwtToken = require('./token.js')
const fs = require('fs');

class Products {
  add_product(req, res) {
    if (!req.file) {
      return res.status(400).json({ status: 500, message: 'No file uploaded' });
    } else {
      let data = req.body
      data.filename = req.file.filename
      data.filepath = req.file.destination + req.file.filename
      connection.query('INSERT INTO `products` SET ?', data, (error) => {
        if (error) return res.status(500).json({ status: 500, message: error })
        else return res.status(200).json({ status: 200, message: 'Product Created Successfully' })
      })
    }
  }

  products(req, res){
    if(!req.params.id){
      connection.query('SELECT * FROM `products`', (error, results) => {
        if (error) return res.status(500).json({ status: 500, message: error })
        else if (results.length > 0) return res.status(200).json({ status: 200, data: results })
        else return res.status(404).json({ status: 404, data: "No product found" })
      })
    } else {
      connection.query('SELECT * FROM `products` WHERE pro_id=?', req.params.id, (error, results) => {
        if (error) return res.status(500).json({ status: 500, message: error })
        else if (results.length > 0) return res.status(200).json({ status: 200, data: results })
        else return res.status(404).json({ status: 404, data: "No product found" })
      })
    }
  }

  search(req, res) {
    connection.query('SELECT * FROM `products` WHERE title LIKE ? OR category LIKE ?', [`%${req.query.search}%`, `%${req.query.search}%`], (error, results) => {
        if (error) return res.status(500).json({ status: 500, message: error });
        else if (results.length > 0) return res.status(200).json({ status: 200, data: results });
        else return res.status(404).json({ status: 404, data: "No product found" });
    });
  }

  download(req, res){
    const zipFilePath = 'uploads/' + req.params.filename;
    const zipFileName = req.params.filename;
    if (fs.existsSync(zipFilePath)) {
      res.setHeader('Content-Disposition', `attachment; filename=${zipFileName}`);
      res.setHeader('Content-Type', 'application/zip');
      const fileStream = fs.createReadStream(zipFilePath);
      fileStream.pipe(res);
    } else {
      res.status(404).json({status:404, message:'File not found'});
    }
  }

  status(req, res){
    connection.query('UPDATE `products` SET status=? WHERE pro_id=?', [req.body.status, req.body.pro_id], (error, results) => {
      if (error) return res.status(500).json({ status: 500, message: error })
      else if (results) return res.status(200).json({ status: 200, message: "Product status updated successfully" }) 
    })
  }
}

module.exports = { Products }
