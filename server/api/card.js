const router = require("express").Router();
const axios = require("axios");
const { authRequired } = require("../middleware/middleware");
const CardService = require("../services/card");

module.exports = router;

/**
 * req.params === Mongo Business._id
 * this field is a BlueHat internal ID
 */
router.post("/", authRequired, async (req, res, next) => {
  try {
    const user = req.user;
    const card = await CardService.create(user, req.body);
    const cards = await CardService.getAll(user);
    return res.json({ card, cards });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});

router.get("/", authRequired, async (req, res, next) => {
  try {
    const user = req.user;
    const cards = await CardService.getAll(user);
    return res.json({ cards });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});
