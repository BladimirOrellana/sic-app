const { json } = require("body-parser");
const db = require("../model");

// Defining methods for User Controllers
module.exports = {
  create: function (req, res) {
    db.User.create(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(422));
  },
};
