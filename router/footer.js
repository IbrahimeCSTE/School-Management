const express=require("express")
const FooterCol1 = require("../model/FooterCol1")
const FooterCol2 = require("../model/FooterCol2")
const FooterCol3 = require("../model/FooterCol3")
const footerRouter=express.Router()

footerRouter.get('/footerCol1',async(req,res)=>{
    const footer=await FooterCol1.find({})
    if(!footer){
        res.send("No Notice Declearaion")
    }
    else{
        res.send(footer)
    }
})

footerRouter.get('/footerCol2',async(req,res)=>{
    const footer=await FooterCol2.find({})
    if(!footer){
        res.send("No Notice Declearaion")
    }
    else{
        res.send(footer)
    }
})

footerRouter.get('/footerCol3',async(req,res)=>{
    const footer=await FooterCol3.find({})
    if(!footer){
        res.send("No Notice Declearaion")
    }
    else{
        res.send(footer)
    }
})

footerRouter.post('/footerCol1',async(req,res)=>{
    try{
        const{
            facebook,
            gmail,
            instragram ,
            phone 
           }=req.body

        const footer=new FooterCol1({
            facebook,
            gmail,
            instragram ,
            phone 
    
        })
       await footer.save()
        res.send(footer)
    }catch(error){
        console.log(error.message)

    }
})

footerRouter.post('/footerCol1',async(req,res)=>{
    try{
        const{
            facebook,
            gmail,
            instragram ,
            phone 
           }=req.body

        const footer=new FooterCol1({
            facebook,
            gmail,
            instragram ,
            phone 
    
        })
       await footer.save()
        res.send(footer)
    }catch(error){
        console.log(error.message)

    }
})


noticRouter.delete('/:id',async(req,res)=>{
    const notice=await Notice.findById(req.params.id)
    if(!notice){
       return res.send("No Notice Declearaion")
    }
    else{
        await notice.remove()
        res.send('Notice removed')
    }
})

noticRouter.put("/:id", async(req, res) => {
    const {title,notice,author,atPublish}=req.body
   await Notice.updateMany(
      { _id: req.params.id },
      { $set: {title:title, notice:notice,author:author,atPublish:atPublish } }
    )
      .then((result) => {
        console.log(result);
        res.status(200).json({ msg: "successfully updated" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: "error occurred" });
      });
  });
  

module.exports=noticRouter