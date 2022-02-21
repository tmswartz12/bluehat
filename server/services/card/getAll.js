const logger = require("pino")();
const { Card, BankAccount, Business, User } = require("../../db");
const SolidService = require("../solid");

const getAll = async (user) => {
  try {
    const business = await Business.findOne({ _id: user.business });
    const cards = await Card.find({});
    return cards;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { getAll };
