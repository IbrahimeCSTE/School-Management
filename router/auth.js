const express = require("express");

const authRouter = express.Router();

const {  check, validationResult } = require("express-validator");
const User = require("../model/User");


authRouter.get("/", async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (user) {
      res.json(user);
    }
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

authRouter.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      //already user
      if (!user) {
        return res.status(400).json({ errors: [{ msg: "invalid user" }] });
      }
     else if (user &&(password===user.password)) {
        res.send(user)
       
      }
      else{
        res.send('invalid')
      }
    
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = authRouter;
