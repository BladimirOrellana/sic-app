const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tandaSchema = new Schema({
  tandaName: String,
  numberOfWeeks: Number,
  myNumber: Number,
  startingDate: Date,
  endingDate: Date,
  pricePerNumber: Number,
  players: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: Date,
  updatedAt: Date,
});

const Tanda = mongoose.model("Tanda", tandaSchema);
module.exports = Tanda;
