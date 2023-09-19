const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const followersSchema = new Schema({
  userId: [{ type: Schema.Types.ObjectId, ref: "User" }],

  createdAt: Date,
  updatedAt: Date,
});

const Followers = mongoose.model("Followers", followersSchema);
module.exports = Followers;
