var express = require('express');
var router = express.Router();
const {createcourt} = require('../controller/adminController')
const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
})
const uploadImage = multer({storage:fileStorage})
router.post('/createcourt',uploadImage.single('image'),createcourt)



module.exports = router;
