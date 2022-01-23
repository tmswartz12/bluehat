const router = require("express").Router();
module.exports = router;
const { attachUserToRequest } = require("../middleware/authMiddleware");

router.use(attachUserToRequest);
router.use("/user", require("./user"));
router.use("/business", require("./business"));
router.use("/card", require("./card"));
router.use("/receipt", require("./receipt"));
router.use("/webhook", require("./webhook"));

router.use((req, res, next) => {
  const error = new Error("Not Found Here");
  error.status = 404;
  next(error);
});
