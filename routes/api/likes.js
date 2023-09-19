const router = require("express").Router();
const likesController = require("./../../controller/likesControllers");
// matches with '/api/likess/'
router.route("/like/:_id").get(likesController.findByEmail);
router.route("/").post(likesController.create).get(likesController.getAll);
router.route("/like/:_id").put(likesController.update);
module.exports = router;
