const logger = require("pino")();
const SolidService = require("../solid");

const submit = async (solidPersonId, business) => {
  try {
    await SolidService.BUSINESS.submitKYB(
      solidPersonId,
      business.solidBusinessId
    );
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { submit };
