const mongoose = require("mongoose");
const contuctSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});
const Contuct = mongoose.model("contuct", contuctSchema);
module.exports = Contuct;
