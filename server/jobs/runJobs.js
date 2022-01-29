const { extractReceiptData } = require("./extractReceiptData");

const runJobs = async () => {
  if (process.env.BATCH_JOB === "RECEIPTS") {
    console.log("Running receipt extraction");
    await extractReceiptData();
  } else {
    console.log("outside");
  }
};

module.exports = { runJobs };
