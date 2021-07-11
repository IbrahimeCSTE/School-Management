const express = require("express");

const { check, validationResult } = require("express-validator");
const Contuct = require("../model/Contuct");


const contuctRouter = express.Router();

contuctRouter.get('/',async(req,res)=>{
    const result=await Contuct.find({})
    if(!result){
        res.send('No Contuct')
    }
    else{
        res.send(result)
    }
})

contuctRouter.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("subject", "subject is required").not().isEmpty(),
    check("message", "massage is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, subject, message } = req.body;
    try {
      const contuct = new Contuct({
        email,
        subject,
        message,
      });

      await contuct.save();
      res.send(contuct);
    } catch (error) {
      console.log(error.message);
      res.send("server error");
    }
  }
);

contuctRouter.delete('/:id',async(req,res)=>{
  const contuct=await Contuct.findById(req.params.id)
  if(!contuct){
     return res.send("No contuct ")
  }
  else{
      await contuct.remove()
      res.send('contuct removed')
  }
})

module.exports = contuctRouter;
