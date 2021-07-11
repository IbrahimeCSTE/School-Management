const express = require("express");

const { check, validationResult } = require("express-validator");
const Payment = require("../model/Payment");



const paymentRouter = express.Router();

paymentRouter.get('/',async(req,res)=>{
    const payment=await Payment.find({})
    if(!payment){
        res.send('No Payment')
    }
    else{
        res.send(payment)
    }
})

paymentRouter.post(
  "/",
  [
    check("stuId", "Please include a stuId").not().isEmpty(),
    check("trxId", "Please include a trxId").not().isEmpty(),
    check("subjectCode", "Please include a sunject code").not().isEmpty(),
     check("subjectCode", "Please include a sunject code").not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { stuId,trxId, subjectCode,tk,date } = req.body;
    try {
      const payment = new Payment({
        stuId,trxId, subjectCode,tk,date
      });

      await payment.save();
      res.send(payment);
    } catch (error) {
      console.log(error.message);
      res.send("server error");
    }
  }
);

paymentRouter.delete('/:id',async(req,res)=>{
  const payment=await Payment.findById(req.params.id)
  if(!payment){
     return res.send("No payment ")
  }
  else{
      await payment.remove()
      res.send('payment removed')
  }
})

module.exports = paymentRouter;
