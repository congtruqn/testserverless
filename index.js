	
const serverless = require('serverless-http');
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Tran cong tru 3')
})
 
module.exports.handler = serverless(app);