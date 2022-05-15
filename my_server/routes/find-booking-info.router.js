const express = require('express');
const router = express.Router();
//Import models
const findBookingInfoForm = require('../models/find_booking_info')

router.get('/', function (req, res) {
    res.send("OK")
})

//Get application form
router.get('/bookingInfos', function (req, res) {
    meetnceleRequestForm.find({}, function (err, data) {
        if (err) {
            res.json({ message: err.message })
        }
        else {
            res.json(data)
        }
    })
})

router.get('/:bookingInfo', async function (req, res) {
    //console.log(req.params.id)
    try {
        const data = await bookingInfo.findById(req.params.productId)
        res.json(data)
    }
    catch (err) {
        res.json({ message: err.message })
    }

})

module.exports = router;