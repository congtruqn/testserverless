	
const serverless = require('serverless-http');
const express = require('express')
const app = express()
const dynamoose = require("dynamoose");
const ddb = new dynamoose.aws.sdk.config.update({
  "accessKeyId": process.env.AWS_SECRET_ID,
  "secretAccessKey": process.env.AWS_SECRET_KEY,
  "region": "ap-southeast-1"
});
app.get('/', function (req, res) {
  res.send('Tran cong tru')
})
app.get('/trutran', function (req, res) {
  let a =  process.env.APP_DOMAIN
  res.json({test:a})
})
app.get('/test', function (req, res) {
  const User = dynamoose.model("User", {"id": Number, "name": String});
  const myUser = new User({
      "id": 1,
      "name": "Tim"
  });
  console.log(myUser.id);
  res.json({test:"a"})
})
module.exports.handler = serverless(app);