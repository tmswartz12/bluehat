const { Kyb, User } = require("../../db");
const logger = require("pino")();

const handleKybEvent = async (event) => {
  try {
    const kyb = await Kyb.findOne({ solidBusinessId: event.businessId });
    kyb.status = event.status;
    kyb.reviewMessage = event.reviewMessage;
    kyb.reviewCode = event.reviewCode;
    kyb.results = event.results;
    kyb.status = event.status;

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

    await kyb.save();
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { handleKybEvent };
