const mongoose=require("mongoose")

const youtubeSchema=new mongoose.Schema({
    id:{type:String ,unique:true}
   
})
const Youtube=mongoose.model("youtube",youtubeSchema)
module.exports=Youtube