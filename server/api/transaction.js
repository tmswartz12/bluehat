const router = require("express").Router();
const axios = require("axios");
const { authRequired } = require("../middleware/middleware");
const TransactionService = require("../services/transaction");

module.exports = router;

router.get("/", authRequired, async (req, res, next) => {
  try {
    const transactions = await TransactionService.getAll(req.user);
    return res.json({ transactions });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});
