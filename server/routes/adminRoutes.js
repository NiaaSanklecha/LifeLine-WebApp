const express = require('express')
const { getDonationRequestListController, addToStocksController, getInventoryContoller,getInventoryForHomeContoller, getBloodRequestListController, deleteFromStocksController, donationController } = require('../controllers/adminController')

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const router = express.Router()


router.get("/get-donation-request-list",getDonationRequestListController)
router.get("/get-blood-request-list",getBloodRequestListController)
router.post("/add-to-stocks",addToStocksController)
router.post("/remove-from-stocks",deleteFromStocksController)
router.get("/get-inventory",getInventoryContoller)
router.get("/get-inventory-home",getInventoryForHomeContoller)
router.post("/donation", async(req,res)=>{
    console.log(req.body)
    const lineItems = [{
        price_data:{
            currency: "cad",
            product_data:{
                name: "Donation for LifeLine from " + req.body.name
            },
            unit_amount: Math.round(req.body.amount*100),
        },
        quantity: 1
    }]
    try{

    
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items: lineItems,
        mode: "payment",
        success_url:"http://localhost:3000/",
        cancel_url:"http://localhost:3000/login"
    })
    if(session){
        return res.status(200).send({
            success: true,
            sessionId: session.id
        })
    }
}catch(error){
    console.log(error)
}    
})

module.exports = router;