const express=require("express")
const EventDes = require("../model/EventDes")

const eventDesRouter=express.Router()

eventDesRouter.get('/',async(req,res)=>{
    const eventDes=await EventDes.find({})
    if(!eventDes){
        res.send("No EventDes Declearaion")
    }
    else{
        res.send(eventDes)
    }
})

eventDesRouter.post('/',async(req,res)=>{
    try{
        const{
            des
           }=req.body

        const result=new EventDes({
            des
    
        })
       await result.save()
        res.send(result)
    }catch(error){
        console.log(error.message)

    }
})

eventDesRouter.delete('/:id',async(req,res)=>{
    const eventDes=await EventDes.findById(req.params.id)
    if(!eventDes){
       return res.send("No eventDes Declearaion")
    }
    else{
        await eventDes.remove()
        res.send('eventDes removed')
    }
})


module.exports=eventDesRouter