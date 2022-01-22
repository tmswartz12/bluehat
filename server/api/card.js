const router = require("express").Router();
const axios = require("axios");
const { authRequired } = require("../middleware/middleware");
const CardService = require("../services/card");

module.exports = router;

/**
 * req.params === Mongo Business._id
 * this field is a BlueHat internal ID
 */
router.post("/:business", authRequired, async (req, res, next) => {
  try {
    const user = req.user;
    const business = req.params.business;

    if (req.params.business.toString() !== req.user.business.toString()) {
      return res.status(401).json({ error: "Not authorized" });
    }
    const card = await CardService.create(user, business, req.body);
    return res.json({ card });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});
