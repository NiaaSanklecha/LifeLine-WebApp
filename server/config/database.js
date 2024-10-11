const mongoose = require('mongoose')
const stockModel = require('../models/stockModel')

const connectDB = async() =>{
    const stocks = [
        {
            "bloodGroup" : "A+",
            "unit": 50
        },
        {
            "bloodGroup" : "A",
            "unit": 20
        },{
            "bloodGroup" : "A-",
            "unit": 50
        },{
            "bloodGroup" : "B+",
            "unit": 50
        },{
            "bloodGroup" : "B",
            "unit": 50
        },{
            "bloodGroup" : "B-",
            "unit": 50
        },{
            "bloodGroup" : "AB+",
            "unit": 50
        },{
            "bloodGroup" : "AB-",
            "unit": 10
        },{
            "bloodGroup" : "O+",
            "unit": 50
        },{
            "bloodGroup" : "O-",
            "unit": 30
        }
    ]
    try{
        await mongoose.connect("mongodb+srv://sanklechanidhi02:capstone4@cluster0.sbwuwhw.mongodb.net/lifeline")
        /* stocks.forEach((stock) =>{
            stockModel.create(stock)
            .then((createdStock) =>{
                console.error("Successfully stock model created")
            })
            .catch((error) => {
                console.error('Error creating product:', error);
              });
        }) */
       
    }catch(error){
        console.error("Failure")
    }
}
module.exports = connectDB;