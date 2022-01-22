const logger = require("pino")();
const { User, Business, BankAccount } = require("../../db");
const SolidService = require("../solid");

const createBankAccount = async (user) => {
  try {
    const foundUser = await User.findOne({ _id: user._id });
    const business = await Business.findOne({ _id: user.business });
    const bankAccount = await SolidService.BUSINESS.createBankAccount(
      foundUser,
      business
    );
    const createdBankAccount = await BankAccount.create({
      business: business._id,
      solidBankId: bankAccount.id,
      solidBusinessId: business.solidBusinessId,
      solidPersonId: foundUser.solidPersonId,
      label: bankAccount.label,
      accountNumber: bankAccount.accountNumber,
      routingNumber: bankAccount.routingNumber,
      status: bankAccount.status,
      type: bankAccount.type,
      sponsorBankName: bankAccount.sponsorBankName,
    });

    return createdBankAccount;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { createBankAccount };
