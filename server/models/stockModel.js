const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema({
    bloodGroup:{
        type: String
    },
    unit:{
        type: Number
    }
}, {timestamps : true})

module.exports = mongoose.model('stocks', stockSchema)