const express = require('express');
const app = express();
const port = 3000;

const morgan = require('morgan')
app.use(morgan('combined'))

//Enable CORS
const cors = require('cors')
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello")
})
const bodyParser = require('body-parser');
app.use(bodyParser.json())
//Import Router
const applicationFormRouter = require('./routes/application_form.router.js');
app.use("/",applicationFormRouter)

//Connect DB
const db = require("./config/db");
db.connect();


app.listen(port, () => {
    console.log(`My server listening on port ${port}`)
})