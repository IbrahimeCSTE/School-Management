const mongoose=require("mongoose")

const FooterCol1Schema=new mongoose.Schema({
    facebook:{type:String},
    gmail:{type:String},
    instragram:{type:String} ,
    phone:{type:String}  
})
const FooterCol1=mongoose.model("footerCol1",FooterCol1Schema)
module.exports=FooterCol1