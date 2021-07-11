const mongoose=require("mongoose")

const FooterCol3Schema=new mongoose.Schema({
    medical:{type:String},
    library:{type:String},
    it:{type:String} ,
    studentClub:{type:String}  
})
const FooterCol3=mongoose.model("footerCol3",FooterCol3Schema)
module.exports=FooterCol3