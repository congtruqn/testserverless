var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/testindex', function(req, res, next) {
  const url = process.env.CVID_SECRET
  res.json({
    data:url
  });
});
module.exports = router;