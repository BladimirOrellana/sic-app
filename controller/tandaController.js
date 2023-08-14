const { json } = require("body-parser");
const db = require("../model");

// Defining methods for Tanda Controllers
module.exports = {
  create: function (req, res) {
    console.log("data controller create 1", req.body);
    db.Tanda.create(req.body)
      .then((result) => {
        console.log("data controller create result 2", result);
        if (result) {
          db.User.findByIdAndUpdate(
            { _id: req.body.createdBy },
            { $push: { tanda: result._id } }
          )

            .then((result2) => {
              console.log("data controller create result 3", result2);
              return res.json(result2);
            })
            .catch((err) => res.status(422));
        }
        return res.json(result);
      })
      .catch((err) => {
        console.log("data controller create result", err);
        return res.status(422);
      });
  },
  getAll: function (req, res) {
    db.Tanda.find()
      .populate("createdBy")
      .then((result) => res.json(result))
      .catch((err) => res.status(422));
  },
  findByuid: function (req, res) {
    console.log("data controller", req.params.uid);
    db.Tanda.findOne({ uid: req.params.uid })
      .then((result) => {
        console.log("result getbyid ", result);
        return res.json(result);
      })
      .catch((err) => res.status(422));
  },
  findCreatedBy: function (req, res) {
    console.log("data controller", req.params.uid);
    db.Tanda.find({ createdBy: req.params.uid })
      .then((result) => {
        console.log("result getbyid ", result);
        return res.json(result);
      })
      .catch((err) => res.status(422));
  },
};
