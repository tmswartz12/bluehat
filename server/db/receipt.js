const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const receiptSchema = new mongoose.Schema({
  // business: { type: ObjectId, required: true, ref: "Business" },
  // user: { type: ObjectId, required: true, ref: "User" },
  // transaction: { type: ObjectId, required: true, ref: "Transaction" },
  butlerLabsUploadId: { type: String, required: true },
  items: [],
  total: { type: String },
  tax: { type: String },
  extracted: { type: Boolean, required: true, default: false },
  dateAdded: { type: "Date", default: Date.now, required: true },
});

const Receipt = mongoose.model("Receipt", receiptSchema);

module.exports = {
  Receipt,
};
