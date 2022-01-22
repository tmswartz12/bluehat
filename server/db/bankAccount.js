const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const STATUS = {
  active: "active",
  inActive: "inActive",
};

const bankAccountSchema = new mongoose.Schema({
  business: { type: ObjectId, required: true, ref: "Business" },
  solidBankId: { type: String, required: true },
  solidBusinessId: { type: String, required: true },
  solidPersonId: { type: String, required: true },
  label: { type: String },
  accountNumber: { type: String, required: true },
  routingNumber: { type: String, required: true },
  status: { type: String, required: true },
  type: { type: String, required: true },
  sponsorBankName: { type: String, required: true },
  modifiedAt: { type: "Date" },
  dateAdded: { type: "Date", default: Date.now, required: true },
});

const BankAccount = mongoose.model("BankAccount", bankAccountSchema);

module.exports = {
  BankAccount,
};
