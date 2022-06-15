	
const serverless = require('serverless-http');
const express = require('express')
const app = express()
const dynamoose = require("dynamoose");
const ddb = new dynamoose.aws.sdk.DynamoDB({
  "accessKeyId": process.env.accessKeyId,
  "secretAccessKey": process.env.secretAccessKey,
  "region": "ap-southeast-1"
});
const mysql = require('serverless-mysql')({
  config: {
    host     : 'trutran.cluster-c8ls3dqlbk8b.ap-southeast-1.rds.amazonaws.com',
    database : 'trutran',
    user     : process.env.db_username,
    password : process.env.db_password
  }
})       
dynamoose.aws.ddb.set(ddb);
app.get('/', function (req, res) {
  res.send('Tran cong tru')
})
app.get('/trutran',async function (req, res) {
  try{
    let results = await mysql.query('SELECT * FROM Persons')
 
    // Run clean up function
    await mysql.end()
   
    // Return the results
    res.json(results)
    //return results
  }
  catch(error){
    console.log(error)
  }
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