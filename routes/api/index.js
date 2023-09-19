const router = require("express").Router();
const user = require("./user");
const likes = require("./likes");
const follwers = require("./follwers");

router.use("/users", user);
router.use("/likes", likes);
router.use("/followers", follwers);
//routes
module.exports = router;
