const { extractReceiptData } = require("./extractReceiptData");

const runJobs = async () => {
  if (process.env.BATCH_JOB === "RECEIPTS") {
    console.log("here");
    await extractReceiptData();
  } else {
    console.log("outside");
  }
};

module.exports = { runJobs };
