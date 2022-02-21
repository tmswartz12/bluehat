const { Kyc, User } = require("../../db");
const logger = require("pino")();

const handleKycEvent = async (event) => {
  try {
    const user = await User.findOne({ solidPersonId: event.personId });
    const kyc = await Kyc.findOne({ solidPersonId: event.personId });
    kyc.status = event.status;
    kyc.reviewMessage = event.reviewMessage;
    kyc.reviewCode = event.reviewCode;
    kyc.results = event.results;
    kyc.status = event.status;

    if (event.status === "approved") {
      /**
       * Maybe we update the user model to reflect this?
       */
    }

    if (event.status === "declined") {
      /**
       * Maybe we update the user model to reflect this?
       */
    }

    await kyc.save();
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { handleKycEvent };
