const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const transactionSchema = new mongoose.Schema({
  business: { type: ObjectId, required: true, ref: "Business" },
  user: { type: ObjectId, required: true, ref: "User" },
  card: { type: ObjectId, required: true, ref: "Card" },
  receipt: { type: ObjectId, ref: "Receipt" },
  solidCardId: { type: String, required: true },
  solidTransactionId: { type: String, required: true }, // not sure the difference between transaction and transfer
  solidTransferId: { type: String, required: true },
  txnDate: { type: "Date", default: Date.now, required: true },
  amount: { type: String },
  title: { type: String },
  txnType: { type: String },
  description: { type: String },
  status: { type: String },
  subType: { type: String },
  merchant: {
    merchantName: String,
    merchantCity: String,
    merchantState: String,
    merchantCountry: String,
    postalCode: String,
    merchantCategory: String,
    merchantCategoryCode: String,
  },
  dateAdded: { type: "Date", default: Date.now, required: true },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = {
  Transaction,
};
