const router = require("express").Router();
const axios = require("axios");
const { authRequired } = require("../middleware/middleware");
const ProjectService = require("../services/project");

module.exports = router;

router.get("/", authRequired, async (req, res, next) => {
  try {
    const projects = await ProjectService.getAll(req.user);
    return res.json({ projects });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});

router.get(
  "/transaction/:transaction",
  authRequired,
  async (req, res, next) => {
    try {
      const projects = await ProjectService.getByTransaction(
        req.params.transaction
      );
      return res.json({ projects });
    } catch (error) {
      console.log("error", error);
      return res.status(500).json({ error });
    }
  }
);
