const router = require("express").Router();
const userController = require("./../../controller/userController");
// matches with '/api/users/'

router.route("/").post(userController.create);
module.exports = router;
