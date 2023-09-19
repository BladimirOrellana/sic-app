const { json } = require("body-parser");
const db = require("../model");

// Defining methods for.Followers Controllers
module.exports = {
  create: function (req, res) {
    db.Followers.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422));
  },
  getAll: function (req, res) {
    db.Followers.find()
      .then((result) => res.json(result))
      .catch((err) => res.status(422));
  },
  findByEmail: function (req, res) {
    console.log("data controller", req.params.uid);
    console.log("data from client ", req.params.email);
    db.Followers.findOne({ email: req.params.email })

      .then((result) => {
        console.log("result  ", result);
        return res.json(result);
      })
      .catch((err) => res.status(422));
  },
  update: function (req, res) {
    db.Followers.findOneAndUpdate({ email: req.params.email }, req.body)
      .then((dbModel) => {
        db.Followers.findOne({ email: dbModel.email })

          .then((result) => {
            console.log("result  ", result);
            return res.json(result);
          })
          .catch((err) => res.status(422));
      })
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Followers.findById({ email: req.params.email })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
