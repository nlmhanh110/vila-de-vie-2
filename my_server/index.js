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


//Connect DB
const db = require("./config/db");
db.connect();


app.listen(port, () => {
    console.log(`My server listening on port ${port}`)
})