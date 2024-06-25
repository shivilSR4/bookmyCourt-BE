const mongoose = require('mongoose')
const courtSheduleShema = mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    slot:{
        type:Object,
        required:true
    },
    cost:{
        type:Number,
        required:true
    },
    bookedBy:{
        type:mongoose.Types.ObjectId
    },
    cancellation:{
        type:Array
    },
    courtId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    paymentOrders:{
        type:Array
    }
})

const CourtShedules = mongoose.model('courtShedules',courtSheduleShema)
module.exports = CourtShedules