const { default: Axios } = require("axios");
const {
  solidAPIUrl,
  solidErrorLogger,
} = require("../../../config/solidConfig");

const logger = require("pino")();

const createBankAccount = async (user, business) => {
  try {
    const headers = {
      "sd-api-key": process.env.SD_API_KEY,
      "Content-Type": "application/json",
      "sd-person-id": user.solidPersonId,
    };

    const body = {
      businessId: business.solidBusinessId,
      acceptedTerms: true,
      type: "businessChecking",
      label: "Primary",
    };

    const { data } = await Axios.post(`${solidAPIUrl}/v1/account`, body, {
      headers,
    });
    return data;
  } catch (error) {
    console.log(error);
    solidErrorLogger(error.response.data);
    throw new Error(error);
  }
};

module.exports = { createBankAccount };
