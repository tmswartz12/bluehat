const logger = require("pino")();
const { Transaction, Business, User, Card } = require("../../db");
const TwilioService = require("../twilio");

const handleTransactionEvent = async (event) => {
  try {
    const {
      id,
      txtType,
      title,
      amount,
      transferType,
      subType,
      description,
      accountId,
      businessId,
      personId,
      programId,
      balance,
      createdAt,
      txnDate,
      status,
      txnType,
    } = event;

    const merchant = event.card.merchant;
    const business = await Business.findOne({ solidBusinessId: businessId });
    const user = await User.findOne({ solidPersonId: personId });
    const card = await Card.findOne({ solidCardId: event.card.id });

    const transaction = await Transaction.create({
      business: business._id,
      user: user._id,
      card: card._id,
      solidCardId: event.card.id,
      solidTransactionId: id,
      txnDate,
      amount: Math.abs(amount),
      title,
      description,
      txnType,
      status,
      subType,
      merchant,
      solidTransferId: event.card.transferId,
    });

    /**
     * Handle text message
     */

    await TwilioService.sendTransactionNotification(transaction, user);

    return transaction;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { handleTransactionEvent };
