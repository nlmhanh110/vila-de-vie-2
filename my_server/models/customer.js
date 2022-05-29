const mongoose = require("mongoose");
const schema = mongoose.Schema;
const CustomerSchema = new schema({
    lastname:{type:String, require:true},
    firstname:{type:String,require:true},
    phone:{type:String, require:true},
    email:{type:String, require: true}
})

module.exports = mongoose.model("Customer",CustomerSchema)