const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactusSchema = new Schema({
    
    fullname: { type: String, require: true },
    phone: { type: String, require: true },
    email: { type: String, require: true },
    comment: { type: String, require: true },
    
})

module.exports = mongoose.model("contactus", contactusSchema);
