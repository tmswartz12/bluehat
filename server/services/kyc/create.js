const { Kyc } = require("../../db");
const logger = require("pino")();

const create = async (user, solidPerson) => {
  const kycData = solidPerson.kyc;
  try {
    await Kyc.create({
      user: user._id,
      solidPersonId: solidPerson.id,
      status: kycData.status,
      reviewMessage: kycData.reviewMessage,
      results: kycData.results,
      modifiedAt: kycData.modifiedAt,
    });
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { create };
