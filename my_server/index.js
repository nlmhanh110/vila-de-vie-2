const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
// const morgan = require('morgan')
// app.use(morgan('combined'))

//Enable CORS
const cors = require('cors')
app.use(cors());
app.use(express.static(path.join(__dirname,'/resumes')))

app.get('/', (req, res) => {
    res.send("Hello")
})


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//Import Router
const room_infoRouter = require('./routes/room_info.router.js');
app.use("/",room_infoRouter)
const applicationFormRouter = require('./routes/application_form.router.js');
app.use("/",applicationFormRouter)
const meetnceleRequestRouter = require('./routes/meetnrequest.router.js');
app.use("/",meetnceleRequestRouter)

const contactusRouter = require('./routes/contactus.router.js');
app.use("/",contactusRouter)

const bookingInfoRouter = require('./routes/bookinginfo.router');
app.use("/",bookingInfoRouter)
const customerRouter = require('./routes/customer.router');
app.use("/",customerRouter)

//Connect DB
const db = require("./config/db");
db.connect();

app.listen(port, () => {
    console.log(`My server listening on port ${port}`)
})

