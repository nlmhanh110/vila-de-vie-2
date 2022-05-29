const mongoose = require("mongoose");
const schema = mongoose.Schema;

const contactusSchema = new schema({
    
    fullname: { type: String, require: true },
    phone: { type: String, require: true },
    email: { type: String, require: true },
    comment: { type: String, require: true },
    
})

module.exports = mongoose.model("contactform", contactusSchema);
