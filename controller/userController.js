const { json } = require("body-parser");
const db = require("../model");

// Defining methods for User Controllers
module.exports = {
  create: function (req, res) {
    db.User.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422));
  },
  getAll: function (req, res) {
    db.User.find()
      .then((result) => res.json(result))
      .catch((err) => res.status(422));
  },
  findByEmail: function (req, res) {
    console.log("data controller", req.params.uid);
    console.log("data from client ", req.params.email);
    db.User.findOne({ email: req.params.email })

      .then((result) => {
        console.log("result  ", result);
        return res.json(result);
      })
      .catch((err) => res.status(422));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ email: req.params.email }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ email: req.params.email })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
