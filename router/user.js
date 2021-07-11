const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../model/User");


const userRouter = express.Router();

userRouter.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {name,email,stuId,password } = req.body;

    try {
      let user = await User.findOne({ email });
      //already user
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }
     
      //new user
      user = new User({
        name,
        email,
        stuId,
        password
      });
     res.send(user)
      await user.save();

    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

userRouter.put("/:id", async(req, res) => {
  const { 
    name,
    email,
    stuId,
    password
   }=req.body
 await User.updateMany(
    { _id: req.params.id },
    { $set: {name:name, email:email,stuId:stuId,password:password } }
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

module.exports = userRouter;
