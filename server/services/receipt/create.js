const { Receipt } = require("../../db");
const logger = require("pino")();

const create = async (uploadId) => {
  try {
    /**
     * In order to get the user and business associated to this receipt
     * we need to look at the transaction model
     * once this endpoint is configured we will have the transaction._id
     * from the req.params
     */
    return await Receipt.create({
      //   user: user._id,
      //   business: user.business,
      butlerLabsUploadId: uploadId,
    });
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { create };
