const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const transactionSchema = new mongoose.Schema({
  business: { type: ObjectId, required: true, ref: "Business" },
  dateAdded: { type: "Date", default: Date.now, required: true },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = {
  Transaction,
};
