const express = require('express');
const router = express.Router();
//Import models
const Customer = require('../models/customer')

router.get('/', function (req, res) {
    res.send("OK")
})

//Get application form
router.get('/customers', function (req, res) {
    Customer.find({}, function (err, data) {
        if (err) {
            res.json({ message: err.message })
        }
        else {
            res.json(data)
            console.log("Get data")
        }
    })
})

//Insert applicationform
router.post("/customer", async function(req,res){
    // console.log("Data from clients: ",req.body);
    // res.send("Server received data!")
    let customer = new Customer({
        lastname:req.body.lastname,
        firstname:req.body.firstname,
        phone:"0"+ req.body.phone,
        email:req.body.email,
    })
    try{
        f = await customer.save();
    res.json({message:"success"})
    }
    catch(err){res.json({message:err.message})}
})
module.exports = router;