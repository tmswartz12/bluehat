const logger = require("pino")();
const { Card, BankAccount, Business, User } = require("../../db");
const SolidService = require("../solid");

const create = async (user, businessId, cardBody) => {
  try {
    const {
      label,
      limitAmount,
      limitInterval,
      allowedCategories,
      blockedCategories,
      bin,
      cardType,
      employee,
    } = cardBody;

    /**
     * TO DO... find our create an employee to associate the card to!
     */

    const foundUser = await User.findOne({ _id: user._id });
    const business = await Business.findOne({ _id: businessId });
    const bankAccount = await BankAccount.findOne({ business: business._id });
    const body = {
      cardType,
      label,
      accountId: bankAccount.solidBankId,
      limitAmount,
      limitInterval,
      currency: "USD",
      billingAddress: {
        addressType: "billing",
        line1: business.address.line1,
        line2: business.address.line2,
        city: business.address.city,
        state: business.address.state,
        country: business.address.country,
        postalCode: business.address.postalCode,
      },
      shipping: {
        shippingAddress: {
          addressType: "shipping",
          line1: business.address.line1,
          line2: business.address.line2,
          city: business.address.city,
          state: business.address.state,
          country: business.address.country,
          postalCode: business.address.postalCode,
        },
      },
      allowedCategories,
      blockedCategories,
      bin: "credit",
    };
    const card = await SolidService.CARD.create(foundUser, body);
    const createdCard = await Card.create({
      solidCardId: card.id,
      solidBankId: card.accountId,
      solidBusinessId: card.businessId,
      cardType: card.cardType,
      label: card.label,
      limitAmount: card.limitAmount,
      limitInterval: card.limitInterval,
      currency: card.currency,
      expiryMonth: card.expiryMonth,
      expiryYear: card.expiryYear,
      cardStatus: card.status,
      last4: card.last4,
      allowedCategories: card.allowedCategories,
      blockedCategories: card.blockedCategories,
      solidPersonId: foundUser.solidPersonId,
      business: business._id,
      user: user._id, // eventually will make this dynamic based on employee
    });
    return createdCard;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { create };
