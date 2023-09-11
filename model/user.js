const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  username: String,
  role: String,
  isAdmin: { type: Boolean, default: false },
  createdAt: Date,
  updatedAt: Date,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
