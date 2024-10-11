const appointmentModel = require('../models/appointmentModel')
const sendRequestController = async (req,res) =>{
    console.log(req.body)
    req.body.requestType = "out"
    try{
        const request = new appointmentModel(req.body)
        await request.save()
        return res.status(201).send({   
            success: true,
            message: " Requested successfully",
            request,
          });
    }catch(error){
        res.status(500).send({
            success: false
        })
    }
    
}
const getRequestsController = async (req,res) =>{
    try {
        const requests = await appointmentModel.find({requestType: "out", userId : req.query.id})
        if (requests) {
            return res.status(201).send({
                success: true,
                requests,
            })
        }else{
            return res.status(201).send({   
                success: true,
                message: "No requests",
                requests: null,
              });
        }
    } catch (error) {
        res.status(500).send({
            success: false
        })
    }
}
const deleteRequestController = async(req,res) =>{
    console.log(req.query)
    try{
    const result = await appointmentModel.findOneAndDelete({_id : req.query.id})
    console.log(result)
    if(result){
        return res.status(200).send({
            success: true,
            message: "Your blood request for "+ result.bloodGroup+ " is successfully withdrawed."
     } )
    }}
    catch(error){
        console.log(error)
    }
}
module.exports = {sendRequestController,getRequestsController,deleteRequestController}