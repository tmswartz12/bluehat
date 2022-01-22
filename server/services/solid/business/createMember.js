const { default: Axios } = require("axios");
const {
  solidAPIUrl,
  solidErrorLogger,
} = require("../../../config/solidConfig");

const logger = require("pino")();

const createMember = async (user, business) => {
  try {
    const headers = {
      "sd-api-key": process.env.SD_API_KEY,
      "Content-Type": "application/json",
      "sd-person-id": user.solidPersonId,
    };

    const body = {
      businessId: business.solidBusinessId,
      personId: user.solidPersonId,
      ownership: user.ownership,
      title: user.title,
    };

    const { data } = await Axios.post(`${solidAPIUrl}/v1/member`, body, {
      headers,
    });
    return data;
  } catch (error) {
    console.log(error);
    solidErrorLogger(error.response.data);
    throw new Error(error);
  }
};

module.exports = { createMember };
