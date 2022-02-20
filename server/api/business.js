const router = require("express").Router();
const axios = require("axios");
const { User, Business } = require("../db");
const { authRequired } = require("../middleware/middleware");
const UserService = require("../services/user");
const BusinessService = require("../services/business");
const KybService = require("../services/kyb");

module.exports = router;

router.post("/onboarding", authRequired, async (req, res, next) => {
  try {
    const { business, user } = await BusinessService.onboarding(
      req.user,
      req.body
    );
    const kyb = await KybService.submit(req.user.solidPersonId, business);
    return res.json({ business, kyb, user });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});

router.post("/bank-account", authRequired, async (req, res, next) => {
  try {
    const bankAccount = await BusinessService.createBankAccount(req.user);
    return res.json({ bankAccount });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});
