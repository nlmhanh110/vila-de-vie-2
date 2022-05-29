const express = require('express');
const router = express.Router();
//Import models
const meetnceleRequestForm = require('../models/meeting_request')

router.get('/', function (req, res) {
    res.send("OK")
})

//Get application form
router.get('/meeting_requests', function (req, res) {
    meetnceleRequestForm.find({}, function (err, data) {
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
router.post("/meeting_request", async function(req,res){
    // console.log("Data from clients: ",req.body);
    // res.send("Server received data!")
    let meetnceleRequest_Form = new meetnceleRequestForm({
        lastName:req.body.lastName,
        firstName:req.body.firstName,
        phoneNumber:req.body.phone,
        email:req.body.email,
        address:req.body.address,
        meetingType:req.body.meetingType,
        quantity:req.body.quantity,
        requestRoom:req.body.requestRoom,
        StartDate:req.body.StartDate,
        EndDate:req.body.EndDate,
        note:req.body.note
        
    })
    try{
        f = await  meetnceleRequest_Form.save();
    res.json({message:"success"})
    }
    catch(err){res.json({message:err.message})}
})
module.exports = router;