const mongoose=require("mongoose")

const resultSchema=new mongoose.Schema({
    
    stuId:{type:String,unique:true},
    name:{type:String},
    bangla1:{type:Number},
    bangla2:{type:Number},
    english1:{type:Number},
    english2:{type:Number},
    math:{type:Number},
    science:{type:Number}   
})
const Result=mongoose.model("result",resultSchema)
module.exports=Result