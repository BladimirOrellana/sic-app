const router = require("express").Router();
const user = require("./user");
const tanda = require("./tanda");
router.use("/users", user);
router.use("/users/tanda", tanda);
router.use("/perfil", tanda);
module.exports = router;
