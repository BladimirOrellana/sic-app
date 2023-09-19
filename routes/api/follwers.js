const router = require("express").Router();
const followersController = require("./../../controller/followersControllers");
// matches with '/api/followerss/'
router.route("/followers/:_id").get(followersController.findByEmail);
router
  .route("/")
  .post(followersController.create)
  .get(followersController.getAll);
router.route("/followers/:_id").put(followersController.update);
module.exports = router;
