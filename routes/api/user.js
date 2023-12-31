const router = require("express").Router();
const userController = require("./../../controller/userController");
// matches with '/api/users/'
router.route("/user/:email").get(userController.findByEmail);
router.route("/").post(userController.create).get(userController.getAll);
router.route("/user/:email").put(userController.update);
module.exports = router;
