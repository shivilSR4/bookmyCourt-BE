const mongoose = require('mongoose');

const courtSchema = mongoose.Schema({
    courtName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: new Date()
    },
    courtImage: {
        type: String
    }
});

const Court = mongoose.model('Court', courtSchema);

module.exports = Court;
