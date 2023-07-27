const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: { type: String, required: true },
  nickname: String,
  role: String,
  isAdmin: { type: Boolean, default: false },
  tanda: [{ type: Schema.Types.ObjectId, ref: "Tanda" }],
  password: String,
  createdAt: Date,
  updatedAt: Date,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
