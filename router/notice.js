const express=require("express")
const Notice = require("../model/Notice")
const noticRouter=express.Router()

noticRouter.get('/',async(req,res)=>{
    const notice=await Notice.find({})
    if(!notice){
        res.send("No Notice Declearaion")
    }
    else{
        res.send(notice)
    }
})

noticRouter.post('/',async(req,res)=>{
    try{
        const{
            title,
            notice,
            author,
            atPublish
           }=req.body

        const result=new Notice({
            title,
            notice,
            author,
            atPublish
    
        })
       await result.save()
        res.send(result)
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