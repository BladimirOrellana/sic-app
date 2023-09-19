const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const likesSchema = new Schema({
  userId: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: Date,
  updatedAt: Date,
});

const Likes = mongoose.model("Likes", likesSchema);
module.exports = Likes;
