var express = require('express');
var router = express.Router();
const USERS = require('../models/userModel')
const {doSignup,doLogin} = require('../controller/userController')

/* GET home page. */
router.post('/signup',doSignup)

router.post('/login',doLogin)

module.exports = router;
