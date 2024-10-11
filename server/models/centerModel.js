const mongoose = require('mongoose')

const addCenterSchema = new mongoose.Schema({
    city:{
        type: String,
        required: [true],

    },
    centerName:{
        type: String,
        required: [true],
    },
    centerAddress:{
        type: String,
        required: [true],
    },
    province:{
        type: String,
        required: [true],
        default: "ON"
    },
    
}, {timestamps : true})

module.exports = mongoose.model('centers', addCenterSchema)