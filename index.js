	
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
app.get('/test',async function (req, res) {
  const User = dynamoose.model("User", {"id": Number, "name": String});
  try {
    const user = await User.create({"id": 1, "name": "Tim"}); // If a user with `id=1` already exists in the table, an error will be thrown.
    console.log(user);
  } catch (error) {
      console.error(error);
  }
  res.json({test:"a"})
})
module.exports.handler = serverless(app);