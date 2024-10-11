const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        unique: true,
        required:[true,"Required"]
    },
    password:{
        type:String,
        required:[true,"Required"]
    },
    postalCode:{
        type:String,
    
    },
            phoneNumber:{
                type: Number
            },
    dateofBirth :{
        type : Date
    },
    role:{
        type: String,
        required:[true,"Required"],
        enum:['donor', 'receiver','admin']
    }
}, {timestamps : true})

module.exports = mongoose.model('users', userSchema)