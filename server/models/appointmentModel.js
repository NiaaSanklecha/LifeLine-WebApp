const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    requestType:{
        type: String,
        enum: ["in", "out"],
    },
    locationId:{
        type: mongoose.Schema.Types.ObjectId,
      ref: "centers",
      default : function(){
        if( this.requestType === "out"){
            return null
        }
      }
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        
    },
    name:{
        type: String
    },
    email:{
        type: String
    },
    unit:{
        type: Number
    },
    phoneNumber:{
        type: Number
    },
    bloodGroup:{
        type: String
    },
    gender:{
        type: String
    },
    appointmentDate:{
        type: String,
        default : function(){
            if( this.requestType === "out"){
                return null
            }
          }
    },
    appointmentTime:{
        type: String,
        default : function(){
            if( this.requestType === "out"){
                return null
            }
          }
    },
    status:{
        type: String,
        default : "pending",
        enum: ["pending","approved","rejected"]
    }

}, {timestamps : true})

module.exports = mongoose.model('appointments', appointmentSchema)