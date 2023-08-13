const router = require("express").Router();
const tandaController = require("./../../controller/tandaController");
// matches with '/api/tandas/tanda'
router.route("/:uid").get(tandaController.findByuid);
router.route("/").post(tandaController.create).get(tandaController.getAll);

module.exports = router;
