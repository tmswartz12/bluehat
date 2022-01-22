const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const KYC_STATUSES = {
  notStarted: "notStarted",
  submitted: "submitted",
  approved: "approved",
  declined: "declined",
  inReview: "inReview",
};

const kycSchema = new mongoose.Schema({
  user: { type: ObjectId, required: true, ref: "User" },
  solidPersonId: { type: String, required: true },
  status: {
    type: String,
    default: KYC_STATUSES.notStarted,
    enum: Object.values(KYC_STATUSES),
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

const Kyc = mongoose.model("Kyc", kycSchema);

module.exports = {
  Kyc,
};
