const logger = require("pino")();
const { Transaction, Business, User, Card } = require("../../db");

const getAll = async (user) => {
  try {
    const business = await Business.findOne({ _id: user.business });
    const transactions = await Transaction.find({ business: business._id });
    return transactions;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { getAll };
