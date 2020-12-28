const express = require('express')
const app = express()
var { executeQuery } = require('./service');
require('dotenv').config()
app.listen(3000, () => {
  console.log(`Server started on 3000`)
})

app.use(express.json())

app.get('/', function (req, res) {
  // executeQuery('SELECT * FROM products');
  res.send('OK')
})

app.post('/', function(req, res) {
  console.log(req.body.id)
  res.send('This is Post route')
})
