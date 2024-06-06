var express = require('express');
var router = express.Router();
const USERS = require('../models/userModel')
const {doSignup} = require('../controller/userController')

/* GET home page. */
router.post('/signup',doSignup)

module.exports = router;
