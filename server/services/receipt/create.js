const { Receipt, Transaction } = require("../../db");
const logger = require("pino")();

const create = async (uploadId, s3Url, transactionId) => {
  try {
    const transaction = await Transaction.findOne({ _id: transactionId });
    const receipt = await Receipt.create({
      butlerLabsUploadId: uploadId,
      transaction: transaction._id,
      business: transaction.business,
      user: transaction.user,
      imageUrl: s3Url,
    });

    transaction.receipt = receipt._id;
    transaction.stage = "needsProjectManagement";
    await transaction.save();
    return receipt;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { create };
