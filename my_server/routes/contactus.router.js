const express = require('express');
const router = express.Router();
//Import models
const contactusForm = require('../models/contactus')

router.get('/', function (req, res) {
    res.send("OK")
})

//Get application form
router.get('/contactforms', function (req, res) {
    contactusForm.find({}, function (err, data) {
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
router.post("/contactform", async function(req,res){
    // console.log("Data from clients: ",req.body);
    // res.send("Server received data!")
    let contactus_Form = new contactusForm({
        fullname:req.body.fullname,
        phone:req.body.phone,
        email:req.body.email,
        comment:req.body.comment
    })
    try{
        f = await  contactus_Form.save();
    res.json({message:"success"})
    }
    catch(err){res.json({message:err.message})}
})
module.exports = router;