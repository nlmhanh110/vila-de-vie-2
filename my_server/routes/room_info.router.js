const express = require('express');
const router = express.Router();
//Import models
const Room = require('../models/room_info')

router.get('/', function (req, res) {
    res.send("OK")
})


//Get all products
router.get('/rooms', function (req, res) {
    Room.find({}, function (err, data) {
        if (err) {
            res.json({ message: err.message })
        }
        else {
            res.json(data);
            console.log("Get data successfully")
        }
    })
})
//Get products by ID
router.get('/:roomId', async function (req, res) {
    //console.log(req.params.id)
    try {
        const data = await Room.findById(req.params.id)
        res.json(data)
    }
    catch(err){
        res.json({message:err.message})
    }
    
})
//Insert products
router.post("/room", async function(req,res){
    // console.log("Data from clients: ",req.body);
    // res.send("Server received data!")
    let room = new Product({
        id:req.body.id,
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        img:req.body.img,
        personNumber:req.body.personNumber,
        details:req.body.details
    })
    try{
        r = await room.save();
    res.json({message:"success"})
    }
    catch(err){res.json({message:err.message})}
})
//Update products
router.patch("/:roomId", async(req,res) => {
    try{
        await Room.updateOne({id:req.params.roomId},{
        $set:{title:req.body.title,
            price:req.body.price,
            description:req.body.description,
            img:req.body.img,
            personNumber:req.body.personNumber,
            details:req.body.details}
    })
    res.json({status:200,message:"success!"})}
    catch(err){
        console.log(err.message);
        res.json({message:err.message})
    }
    
})
//Delete products
router.delete("/:roomId",async (req,res)=>{
    try{
        await Room.deleteOne({id:req.params.roomId});
        res.json({status:200,message:"Delete successful!"})
    }
    catch(err){
        console.log(err.message);
        res.json({message:err.message})
    }
})

module.exports = router;