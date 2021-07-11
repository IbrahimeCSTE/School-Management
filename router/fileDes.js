const express=require("express")
const FileDes = require("../model/fileDes")
const fileDesRouter=express.Router()

fileDesRouter.get('/',async(req,res)=>{
    const fileDes=await FileDes.find({})
    if(!fileDes){
        res.send("No fileDes Declearaion")
    }
    else{
        res.send(fileDes)
    }
})

fileDesRouter.post('/',async(req,res)=>{
    try{
        const{
            des
           }=req.body

        const result=new FileDes({
            des
    
        })
       await result.save()
        res.send(result)
    }catch(error){
        console.log(error.message)

    }
})

fileDesRouter.delete('/:id',async(req,res)=>{
    const fileDes=await FileDes.findById(req.params.id)
    if(!fileDes){
       return res.send("No fileDes Declearaion")
    }
    else{
        await fileDes.remove()
        res.send('fileDes removed')
    }
})


module.exports=fileDesRouter