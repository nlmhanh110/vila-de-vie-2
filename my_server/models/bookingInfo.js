const mongoose = require("mongoose");
const schema = mongoose.Schema;
const BookingInfoSchema = new schema({
    code:{type:String,require:true},
    lastname:{type:String, require:true},
    firstname:{type:String,require:true},
    phone:{type:String, require:true},
    email:{type:String, require: true},
    maxPeople:{type:String, require:true},
    guestName:{type:String, require:true},
    comment:{type:String, require:true},
    paymethod:{type:String, require:true},
    bookTime:{type:String, require:true},
    totalAmount:{type:String, require:true},
    bookingStatus:{type:String, require:true},
    checkInDate:{type:String, require:true},
    checkOutDate:{type:String, require:true},
    promotion:{type:String, require:true},
    feedback:{type:String, require:true},
    roomInfo:{type:JSON, require:true}
})
module.exports = mongoose.model("BookingInfo",BookingInfoSchema)