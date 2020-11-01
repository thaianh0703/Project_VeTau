var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('Kết nối API thành công');
});

module.exports = router;
