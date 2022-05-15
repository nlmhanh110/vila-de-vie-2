const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const findBookingInfoSchema = new Schema({
    
    code: { type: String, require: true },
    
})

module.exports = mongoose.model("findBookingInfo", findBookingInfoSchema);
