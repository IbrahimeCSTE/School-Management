const mongoose=require("mongoose")

const paymentSchema=new mongoose.Schema({
    
    stuId:{type:String,unique:true},
    trxId:{type:String},
    subjectCode:{type:Number},
    tk:{type:Number},
    date:{type:String},
      
})
const Payment=mongoose.model("payment",paymentSchema)
module.exports=Payment