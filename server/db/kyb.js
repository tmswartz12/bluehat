const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const KYB_STATUSES = {
  notStarted: "notStarted",
  submitted: "submitted",
  approved: "approved",
  declined: "declined",
  inReview: "inReview",
};

const kybSchema = new mongoose.Schema({
  business: { type: ObjectId, required: true, ref: "Business" },
  solidBusinessId: { type: String, required: true },
  status: {
    type: String,
    default: KYB_STATUSES.notStarted,
    enum: Object.values(KYB_STATUSES),
  },
  reviewMessage: { type: String },
  results: {
    idv: { type: String, default: "notStarted" },
    address: { type: String, default: "notStarted" },
    dateOfBirth: { type: String, default: "notStarted" },
    fraud: { type: String, default: "notStarted" },
  },
  modifiedAt: { type: "Date" },
  dateAdded: { type: "Date", default: Date.now, required: true },
});

const Kyb = mongoose.model("Kyb", kybSchema);

module.exports = {
  Kyb,
};
