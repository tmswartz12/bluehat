const router = require("express").Router();
const axios = require("axios");
const { User } = require("../db");
const { authRequired } = require("../middleware/middleware");
const AuthTokenService = require("../services/authToken");
const UserService = require("../services/user");
const KycService = require("../services/kyc");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    console.log("trying", req.user);
    return res.json({ user: req.user });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create({
      email: req.body.email,
    });
    const authToken = await AuthTokenService.create(user, req.useragent);
    return res.json({ user, authToken });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});

router.post("/onboarding", authRequired, async (req, res, next) => {
  try {
    const user = await UserService.onboarding(req.user, req.body);
    return res.json({ user });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});
