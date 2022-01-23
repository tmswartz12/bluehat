const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const PERIOD_STATUSES = {
  current: "current", // the current pay period. can only have one at a time
  collecting: "collecting", // waiting for payment. period balance is locked
  complete: "complete", // payment collected
  pastdue: "pastdue", // payment is past due and account may result in APR
  deliquent: "deliquent", // account is turned off and sent to collections
};

const payPeriodSchema = new mongoose.Schema({
  business: { type: ObjectId, required: true, ref: "Business" },
  status: {
    type: String,
    default: PERIOD_STATUSES.current,
    enum: Object.values(PERIOD_STATUSES),
  },
  periodStartDate: { type: "Date", required: true },
  periodEndDate: { type: "Date", required: true }, // 60 days after start date
  paymentPeriodEndDate: { type: "Date", required: true }, // 90 days after start date
  paymentDeliquentDate: { type: "Date", required: true }, // 120 days after start date
  periodBalance: { type: Number, default: 0, required: true }, // the sum of all transactions during a pay period
  balanceCollected: { type: Number, default: 0, required: true }, // the amount of money collected to pay off balance
  dateAdded: { type: "Date", default: Date.now, required: true },
});

const PayPeriod = mongoose.model("PayPeriod", payPeriodSchema);

module.exports = {
  PayPeriod,
};
