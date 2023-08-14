const router = require("express").Router();
const tandaController = require("./../../controller/tandaController");
// matches with '/api/tandas/tanda'
router.route("/:uid").get(tandaController.findCreatedBy);
router.route("/mis-tandas/:uid").get(tandaController.findCreatedBy);

router.route("/").post(tandaController.create).get(tandaController.getAll);

module.exports = router;
