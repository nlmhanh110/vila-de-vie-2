const mongoose = require("mongoose");
const schema = mongoose.Schema;
const RoomSchema = new schema({
    id:{type:Number,required:true},
    title:{type:String, require:true},
    price:{type:Number,require:true},
    description:{type:String, require:true},
    img:{type:String, require:true},
    personNumber:{type:Number,require:true},
    details:{overview:String,numberOfBed:Number,bedType:String,footSquare:Number,numberOfBathroom:Number,size:Number,feature:String,featureDetail:String,feedback:String,img1:String,img2:String,img3:String}
})

module.exports = mongoose.model("Room",RoomSchema)