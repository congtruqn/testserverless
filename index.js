	
const serverless = require('serverless-http');
const express = require('express')
const app = express()
const dynamoose = require("dynamoose");
const mysql = require("mysql");
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
  const connection = mysql.createConnection({
    host: 'trutran.cluster-c8ls3dqlbk8b.ap-southeast-1.rds.amazonaws.com',
    port: 3306,
    user: process.env.db_username,
    password: process.env.db_password,
    database: 'trutran'
  });
  res.json({test:"a"})
})
app.get('/test',async function (req, res) {
  const User = dynamoose.model("User", {"id": Number, "name": String});
  try {
    const user = await User.create({"id": 1, "name": "Tim"});
    console.log(user);
  } catch (error) {
      console.error(error);
  }
  res.json({test:"a"})
})
module.exports.handler = serverless(app);