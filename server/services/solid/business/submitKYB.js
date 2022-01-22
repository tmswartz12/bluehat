const { default: Axios } = require("axios");
const {
  solidAPIUrl,
  solidErrorLogger,
} = require("../../../config/solidConfig");

const logger = require("pino")();

const submitKYB = async (solidPersonId, solidBusinessId) => {
  try {
    const headers = {
      "sd-api-key": process.env.SD_API_KEY,
      "Content-Type": "application/json",
      "sd-person-id": solidPersonId,
    };

    const { data } = await Axios.post(
      `${solidAPIUrl}/v1/business/${solidBusinessId}/kyb`,
      null,
      {
        headers,
      }
    );
    console.log("submit KYB response", data);
    return data;
  } catch (error) {
    console.log(error);
    solidErrorLogger(error.response.data);
    throw new Error(error);
  }
};

module.exports = { submitKYB };
