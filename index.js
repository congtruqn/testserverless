	
const serverless = require('serverless-http');
const express = require('express')
const app = express()
console.log('aaa')
app.get('/', function (req, res) {
  res.send('Tran cong tru')
})
app.get('/trutran', function (req, res) {
  let a =  process.env.APP_DOMAIN
  res.json({test:a})
})
app.get('/test', function (req, res) {
  let a =  process.env.AWS_SECRET_ID
  res.json({test:a})
})
module.exports.handler = serverless(app);