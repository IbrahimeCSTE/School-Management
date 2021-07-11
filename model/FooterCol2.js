const mongoose=require("mongoose")

const FooterCol2Schema=new mongoose.Schema({
    location:{type:String},
    thana:{type:String},
    upzila:{type:String} ,
    zila:{type:String}  
})
const FooterCol2=mongoose.model("footerCol2",FooterCol2Schema)
module.exports=FooterCol2