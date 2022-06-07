	
const serverless = require('serverless-http');
const express = require('express')
const app = express()
const dynamoose = require("dynamoose");
console.log(process.env.secretAccessKey)
const ddb = new dynamoose.aws.sdk.DynamoDB({
  "accessKeyId": process.env.accessKeyId,
  "secretAccessKey": process.env.secretAccessKey,
  "region": "ap-southeast-1"
});
dynamoose.aws.ddb.set(ddb);
app.get('/', function (req, res) {
  res.send('Tran cong tru')
})
app.get('/trutran', function (req, res) {
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