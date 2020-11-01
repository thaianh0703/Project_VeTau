var express = require('express');
var router = express.Router();

const loginController =require('../controller/loginController');


router.post('/login',loginController.KiemTraAccount);

module.exports = router;