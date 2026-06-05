const mongoose=require("mongoose");
const holdingschema=new mongoose.Schema({
    name:String,
    qty:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String,
    
});

module.exports= mongoose.model("holding",holdingschema);