const mongoose=require("mongoose")

const noticeSchema=new mongoose.Schema({
    title:{type:String},
    notice:{type:String},
    author:{type:String} ,
    atPublish:{type:String}  
})
const Notice=mongoose.model("notice",noticeSchema)
module.exports=Notice