const { Kyb } = require("../../db");
const logger = require("pino")();

const create = async (business, solidBusiness) => {
  const kybData = solidBusiness.kyb;
  try {
    await Kyb.create({
      business: business._id,
      solidBusinessId: solidBusiness.id,
      status: kybData.status,
      reviewMessage: kybData.reviewMessage,
      results: kybData.results,
      modifiedAt: kybData.modifiedAt,
    });
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { create };
