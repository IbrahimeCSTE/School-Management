const mongoose=require("mongoose")

const EventDesSchema=new mongoose.Schema({
    des:{type:String} 
})
const EventDes=mongoose.model("eventDes",EventDesSchema)
module.exports=EventDes