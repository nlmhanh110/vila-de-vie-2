const express = require('express');
const router = express.Router();
const multer = require("multer");
//Import models
const BookingInfo = require('../models/bookingInfo')

router.get('/', function (req, res) {
    res.send("OK")
})


//Get all products
router.get('/bookinginfos', function (req, res) {
    BookingInfo.find({}, function (err, data) {
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
router.get('/:bookingID', async function (req, res) {
    //console.log(req.params.id)
    try {
        const data = await BookingInfo.findOne(req.params.bookingID)
        res.json(data)
    }
    catch (err) {
        res.json({ message: err.message })
    }

})
//Insert products
// router.post("/bookinginfo", async function (req, res) {
//     console.log("Data from clients: ", req.body);   
//     // res.send("Server received data!")
//     console.log(req.body.lastname);
//     console.log(req.body.roomInfo)
//     let bookinginfo = new BookingInfo({
//         lastname: req.body.lastname,
//         firstname: req.body.firstname,
//         phone: req.body.phone,
//         email: req.body.email,
//         maxPeople: req.body.maxPeople,
//         guestName: req.body.guestName,
//         comment: req.body.comment,
//         paymethod: req.body.paymethod,
//         bookTime: req.body.bookTime,
//         totalAmount: req.body.totalAmount,
//         bookingStatus: req.body.bookingStatus,
//         checkInDate: req.body.checkInDate,
//         checkOutDate: req.body.checkOutDate,
//         promotion: req.body.promotion,
//         feedback: req.body.feedback,
//         roomInfo: req.body.roomInfo
//     })
//     console.log(bookinginfo)
//     try {
//         b = await bookinginfo.save();
//         res.json({ message: "success" })
//     }
//     catch (err) { res.json({ message: err.message }) }
// })
var Storage = multer.diskStorage({
    destination: "resumes",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
    }
});

let maxSize = 10 * 1024 * 1024; //10MB
var upload = multer({
    storage: Storage,
    limits: {
        fileSize: maxSize,
    },
}).single('file');
router.post("/bookinginfo", async function (req, res) {
    console.log("Data from clients: ", req.body);
    // res.send("Server received data!")
    console.log(req.body.lastname);
    console.log(req.body.roomInfo)
    upload(req, res, async (err) => {
        if (err) {
            res.json({ message: err.message });
        }
        else {
            let bookinginfo = new BookingInfo({
                code:req.body.code,
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                phone: req.body.phone,
                email: req.body.email,
                maxPeople: req.body.maxPeople,
                guestName: req.body.guestName,
                comment: req.body.comment,
                paymethod: req.body.paymethod,
                bookTime: req.body.bookTime,
                totalAmount: req.body.totalAmount,
                bookingStatus: req.body.bookingStatus,
                checkInDate: req.body.checkInDate,
                checkOutDate: req.body.checkOutDate,
                promotion: req.body.promotion,
                feedback: req.body.feedback,
                roomInfo: req.body.roomInfo
            })
            console.log(bookinginfo)
            try {
                b = await bookinginfo.save();
                res.json({ message: "success" })
            }
            catch (err) { res.json({ message: err.message }) }
        }
    })
})
//Update products
router.patch("/:bookingID", async (req, res) => {
    try {
        await BookingInfo.updateOne({ _id: req.params.bookingID }, {
            $set: {
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                phone: req.body.phone,
                email: req.body.email,
                maxPeople: req.body.maxPeople,
                guestName: req.body.guestName,
                comment: req.body.comment,
                paymethod: req.body.paymethod,
                bookTime: req.body.bookTime,
                totalAmount: req.body.totalAmount,
                bookingStatus: req.body.bookingStatus,
                checkInDate: req.body.checkInDate,
                checkOutDate: req.body.checkOutDate,
                promotion: req.body.promotion,
                feedback: req.body.feedback,
                roomInfo: req.body.roomInfo
            }
        })
        res.json({ status: 200, message: "success!" })
    }
    catch (err) {
        console.log(err.message);
        res.json({ message: err.message })
    }

})
//Delete products
router.delete("/:bookingID", async (req, res) => {
    try {
        await BookingInfo.deleteOne({ _id: req.params.bookingID });
        res.json({ status: 200, message: "Delete successful!" })
    }
    catch (err) {
        console.log(err.message);
        res.json({ message: err.message })
    }
})

module.exports = router;