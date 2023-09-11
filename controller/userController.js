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
};
