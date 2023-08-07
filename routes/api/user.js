const router = require("express").Router();
const userController = require("./../../controller/userController");
// matches with '/api/users/'
router.route("/user/:uid").get(userController.findByuid);
router.route("/").post(userController.create).get(userController.getAll);

module.exports = router;
