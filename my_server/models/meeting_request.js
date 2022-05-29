const mongoose = require("mongoose");
const schema = mongoose.Schema;

const meeting_requestSchema = new schema({
    lastName: { type: String, require: true },
    firstName: { type: String, require: true },
    email: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    address: { type: String, require: true },
    meetingType: { type: String, require: true },
    quantity: { type: Number, require: true },
    requestRoom: { type: Boolean, require: true },
    StartDate: { type: Date, default: Date.now },
    EndDate: { type: Date, default: Date.now },
    note: { type: String, require: true },
})

module.exports = mongoose.model("meeting_request", meeting_requestSchema);
