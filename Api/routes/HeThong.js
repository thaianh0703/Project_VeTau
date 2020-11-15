var express = require('express');
var router = express.Router();

const LoginController = require('../controller/LoginController');


router.post('/dangnhap',LoginController.KiemTraAccount);

module.exports = router;