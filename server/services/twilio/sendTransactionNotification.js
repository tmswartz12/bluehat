const { Kyc } = require("../../db");
const { twilioClient } = require("../../config/twilioConfig");
const logger = require("pino")();

const sendTransactionNotification = async (transaction, user) => {
  try {
    const message = `BlueHat - Hello ${
      user.firstName
    }. Please upload the receipt associated with your recent $${
      transaction.amount
    } purchase at ${
      transaction.merchant.merchantName
    }. You can reply directly to this message with a picture of your receipt or you can upload it by clicking this link: ${`http://localhost:8080/upload/${transaction._id}`}`;
    twilioClient.messages
      .create({
        body: message,
        to: "+16178724990", // Text this number
        from: "+18596966993", // From a valid Twilio number
      })
      .then((message) => console.log(message));
  } catch (error) {
    console.log("ther was an error");
    logger.error(error);
  }
};

module.exports = { sendTransactionNotification };
