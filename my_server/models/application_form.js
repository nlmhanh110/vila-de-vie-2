const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ApplicationFormSchema = new schema({
    lastname:{type:String, require:true},
    firstname:{type:String,require:true},
    phone:{type:String, require:true},
    email:{type:String, require: true},
    position:{type:String, require:true},
    filepath:{type:String, require:true},
    linkedIn:{type:String},
    method:{type:String, require: true},
    data:{type:String, require: true}
    
})

module.exports = mongoose.model("ApplicationForm",ApplicationFormSchema)