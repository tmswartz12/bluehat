const logger = require("pino")();
const { User, Business, BankAccount, Kyb } = require("../../db");

const getBundle = async (user) => {
  try {
    const business = await Business.findOne({ _id: user.business });
    const employees = await User.find({ business: business._id });
    const kyb = await Kyb.findOne({ business: business._id });

    const bundle = {
      data: business,
      employees,
      kyb,
    };
    return bundle;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { getBundle };
