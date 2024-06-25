var express = require('express');
var router = express.Router();
const {createcourt,addtimeSlotdata} = require('../controller/adminController')
const multer = require('multer');
const { userAuth, } = require('../middleWare/Authenication');

const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
})
const uploadImage = multer({storage:fileStorage})
router.post('/createcourt',userAuth,uploadImage.single('image'),createcourt)
router.post('/addtimeSlotdata',userAuth,addtimeSlotdata)





module.exports = router;
