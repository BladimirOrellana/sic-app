const { json } = require("body-parser");
const db = require("../model");

// Defining methods for Tanda Controllers
module.exports = {
  create: function (req, res) {
    db.Tanda.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422));
  },
  getAll: function (req, res) {
    db.Tanda.find()
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
};
