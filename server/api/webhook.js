const router = require("express").Router();
const axios = require("axios");
const { authRequired } = require("../middleware/middleware");
const ReceiptService = require("../services/receipt");

const { Receipt } = require("../db");

module.exports = router;

/**
 * req.params === Mongo Business._id
 * this field is a BlueHat internal ID
 */

const WEBHOOK_EVENTS = {
  BUSINESS_KYC_APPROVED: "business.kyb.approved",
  PERSON_KYC_APPROVED: "person.kyc.approved",
};

router.post("/", async (req, res, next) => {
  console.log("webhook", req);

  try {
    const event = req.body.eventType;
    console.log("event", event);

    if (event === WEBHOOK_EVENTS.PERSON_KYC_APPROVED) {
      console.log("handle kyc approval", req.body.data);
    }
    if (event === WEBHOOK_EVENTS.BUSINESS_KYC_APPROVED) {
      console.log("handle kyb approval", req.body.data);
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});
