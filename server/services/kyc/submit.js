const { Kyc } = require("../../db");
const logger = require("pino")();
const SolidService = require("../solid");

const submit = async (user) => {
  try {
    console.log("inside submit");
    await SolidService.PERSON.submitKYC(user.solidPersonId);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { submit };
