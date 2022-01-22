const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const LIMIT_INTERVAL_TYPES = {
  daily: "daily",
  weekly: "weekly",
  monthly: "monthly",
  yearly: "yearly",
  allTime: "allTime",
  perTransaction: "perTransaction",
};

const CARD_STATUS = {
  active: "active",
  inactive: "inactive",
  canceled: "canceled",
  pendingActivation: "pendingActivation",
};

const cardSchema = new mongoose.Schema({
  user: { type: ObjectId, required: true, ref: "User" },
  business: { type: ObjectId, required: true, ref: "Business" },
  solidCardId: { type: String, required: true },
  solidBankId: { type: String, required: true },
  solidBusinessId: { type: String, required: true },
  solidPersonId: { type: String, required: true },
  label: { type: String },
  limitAmount: { type: String, required: true },
  limitInterval: {
    type: String,
    default: LIMIT_INTERVAL_TYPES.monthly,
    enum: Object.values(LIMIT_INTERVAL_TYPES),
  },
  allowedCategories: { type: Array },
  blockedCategories: { type: Array },
  bin: { type: String, required: true, default: "credit" },
  last4: { type: String, required: true },
  expiryMonth: { type: String, required: true },
  expiryYear: { type: String, required: true },
  cardStatus: {
    type: String,
    default: CARD_STATUS.pendingActivation,
    enum: Object.values(CARD_STATUS),
  },
  currency: { type: String, required: true, default: "USD" },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = {
  Card,
};
