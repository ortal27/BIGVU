const express = require('express')
const app = express()
const data = require('../data.json');

app.get('/list', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
})

app.listen(8080, '0.0.0.0');
