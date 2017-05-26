var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var product = require('./product-db');

app.use(bodyParser.json()); // for parsing application/json


app.get('/product', function (req, res) {

  res.json(product.find(req.query.key,req.query.value))
})

app.post('/product', function (req, res) {
  res.json(product.save(req.body))
})


app.delete('/product', function (req, res) {
  res.json(product.deleteAll())
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})