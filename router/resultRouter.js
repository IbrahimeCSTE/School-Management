const express=require("express")
const Result = require("../model/ResultModel")
const resultRouter=express.Router()

resultRouter.get('/',async(req,res)=>{
    const result=await Result.find({})
    if(!result){
        res.send("No Result Declearaion")
    }
    else{
        res.send(result)
    }
})

resultRouter.post('/',async(req,res)=>{
    try{
        const{
            stuId,
            name,
            bangla1,
            bangla2,
            english1,
            english2,
            math,
            science
           }=req.body

        const result=new Result({
            stuId,
            name,
            bangla1,
            bangla2,
            english1,
            english2,
            math,
            science
    
        })
       await result.save()
        res.send(result)
    }catch(error){
        console.log(error.message)

    }
})
module.exports=resultRouter