const testController = (req,res) =>{
    console.log("test")
    res.status(200).send({
        message: "Welcome user",
        success : true
    });
};

module.exports = {testController};