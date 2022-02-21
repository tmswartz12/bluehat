const router = require("express").Router();
const axios = require("axios");
const { authRequired } = require("../middleware/middleware");
const ReceiptService = require("../services/receipt");
const KYCService = require("../services/kyc");
const KYBService = require("../services/kyb");
const TransactionService = require("../services/transaction");

const { Receipt } = require("../db");

module.exports = router;

/**
 * req.params === Mongo Business._id
 * this field is a BlueHat internal ID
 */

const WEBHOOK_EVENTS = {
  BUSINESS_KYC_APPROVED: "business.kyb.approved",
  BUSINESS_KYC_DECLINED: "business.kyb.declined",
  PERSON_KYC_APPROVED: "person.kyc.approved",
  PERSON_KYC_DECLINED: "person.kyc.declined",
  CARD_SPEND: "card.spend",
};

router.post("/", async (req, res, next) => {
  console.log("webhook", req.body);

  try {
    const event = req.body.eventType;
    console.log("event", event);

    if (event === WEBHOOK_EVENTS.PERSON_KYC_APPROVED) {
      console.log("handle kyc approval", req.body.data);
      await KYCService.handleKycEvent(req.body.data);
      return res.json({ ok: true });
    }
    if (event === WEBHOOK_EVENTS.PERSON_KYC_DECLINED) {
      console.log("handle kyc declined", req.body.data);
      await KYCService.handleKycEvent(req.body.data);
      return res.json({ ok: true });
    }
    if (event === WEBHOOK_EVENTS.BUSINESS_KYC_APPROVED) {
      console.log("handle kyb approval", req.body.data);
      await KYBService.handleKybEvent(req.body.data);

      /**
       * update KYB and create bank account for user
       */
      return res.json({ ok: true });
    }
    if (event === WEBHOOK_EVENTS.CARD_SPEND) {
      console.log("handle card spend", req.body.data);
      await TransactionService.handleTransactionEvent(req.body.data);
      return res.json({ ok: true });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error });
  }
});
