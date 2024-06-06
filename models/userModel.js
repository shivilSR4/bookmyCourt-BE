const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        required:true,
        default:2
    },
    timestap:{
        type:Date,
        default:new Date()
    }

})

// role 
// admin:1
// user:2

const users = mongoose.model('user',userSchema)

module.exports = users