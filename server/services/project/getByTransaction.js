const logger = require("pino")();
const { Project, Transaction } = require("../../db");

const getByTransaction = async (transactionId) => {
  try {
    const transaction = await Transaction.findOne({ _id: transactionId });
    const projects = await Project.find({ business: transaction.business });
    return projects;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { getByTransaction };
