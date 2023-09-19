const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true },
  username: String,
  positions: [String],
  skillLevel: Number,
  city: String,
  country: String,
  age: Number,
  height: Number,
  gender: String,
  role: String,
  likes: [{ type: Schema.Types.ObjectId, ref: "Likes" }],
  Followers: [{ type: Schema.Types.ObjectId, ref: "Followers" }],
  isAdmin: { type: Boolean, default: false },
  createdAt: Date,
  updatedAt: Date,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
