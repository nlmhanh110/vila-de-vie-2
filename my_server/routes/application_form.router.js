const express = require('express');
const router = express.Router();
//Import models
const ApplicationForm = require('../models/application_form')

router.get('/', function (req, res) {
    res.send("OK")
})

//Get application form
router.get('/applicationforms', function (req, res) {
    ApplicationForm.find({}, function (err, data) {
        if (err) {
            res.json({ message: err.message })
        }
        else {
            res.json(data)
        }
    })
})

//Insert applicationform
router.post("/applicationform", async function(req,res){
    // console.log("Data from clients: ",req.body);
    // res.send("Server received data!")
    let application_form = new ApplicationForm({
        lastname:req.body.lastname,
        firstname:req.body.firstname,
        phone:req.body.phone,
        email:req.body.email,
        position:req.body.position,
        CV:req.body.CV,
        CL:req.body.CL,
        linkedIn:req.body.LinkedIn,
        method:req.body.method,
        data:req.body.data
    })
    try{
        f = await application_form.save();
    res.json({message:"success"})
    }
    catch(err){res.json({message:err.message})}
})
module.exports = router;