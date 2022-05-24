	
const serverless = require('serverless-http');
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Tran cong tru 1')
})
 
module.exports.handler = serverless(app);