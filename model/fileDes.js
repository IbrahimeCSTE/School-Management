const mongoose=require("mongoose")

const FileDesSchema=new mongoose.Schema({
    des:{type:String} 
})
const FileDes=mongoose.model("fileDes",FileDesSchema)
module.exports=FileDes