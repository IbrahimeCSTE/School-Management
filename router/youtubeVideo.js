const express=require("express")
const Youtube = require("../model/youtubeVideo")

const youtubeRouter=express.Router()

youtubeRouter.get('/',async(req,res)=>{
    const video=await Youtube.find({})
    if(!video){
        res.send("No video")
    }
    else{
        res.send(video)
    }
})




youtubeRouter.post('/',async(req,res)=>{
    try{
        const{
            id
           }=req.body

        const video=new Youtube({
           id
    
        })
       await video.save()
        res.send(video)
    }catch(error){
        console.log(error.message)

    }
})




youtubeRouter.delete('/:id',async(req,res)=>{
    const video=await Youtube.findById(req.params.id)
    if(!video){
       return res.send("No video")
    }
    else{
        await video.remove()
        res.send('video removed')
    }
})


module.exports=youtubeRouter