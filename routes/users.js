var express = require('express');
const { userAuth } = require('../middleWare/Authenication');
var router = express.Router();
const {getCourtData,getDatabyId} = require('../controller/userController')

/* GET users listing. */
router.get('/getcourtdata',userAuth,getCourtData );

router.get('/getDatabyId',userAuth,getDatabyId)

module.exports = router;
