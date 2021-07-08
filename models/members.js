const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    dateJoined: {
        type: Date,
        require: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Members', memberSchema)