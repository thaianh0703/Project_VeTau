var express = require('express');
var router = express.Router();

const loginController =require('../controller/loginController');


router.post('/dangnhap',loginController.KiemTraDangNhap);

module.exports = router;