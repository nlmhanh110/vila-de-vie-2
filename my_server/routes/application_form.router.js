    const express = require('express');
const router = express.Router();
const multer = require("multer");

//Import models
const ApplicationForm = require('../models/application_form')

router.get('/', function (req, res) {
    res.send("OK")
})
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
//Get application form
router.get('/applicationforms', function (req, res) {
    ApplicationForm.find({}, function (err, data) {
        if (err) {
            res.json({ message: err.message })
            console.log("Get data not")
        }
        else {
            res.json(data)
            console.log("Get data")
        }
    })
})

//Insert applicationform
router.post("/applicationform", async function (req, res) {
    console.log("Data from clients: ",req.body);
    // res.send("Server received data!")
    upload(req, res, async (err) => {
        if (err) {
            res.json({ message: err.message });
        }
        else {
            console.log(req.file.filename)
            let application_form = new ApplicationForm({
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                phone: req.body.phone,
                email: req.body.email,
                position: req.body.position,
                filepath: req.file.filename,
                linkedIn: req.body.LinkedIn,
                method: req.body.method,
                data: req.body.data
                
            })
            try {
                f = await application_form.save();
                res.json({ message: "success"})
            }
            catch (err) { res.json({ message: err.message }) }
        }
    })
})
module.exports = router;