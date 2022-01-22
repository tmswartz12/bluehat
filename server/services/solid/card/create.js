const { default: Axios } = require("axios");
const {
  solidAPIUrl,
  solidErrorLogger,
} = require("../../../config/solidConfig");

const logger = require("pino")();

const create = async (user, body) => {
  try {
    const headers = {
      "sd-api-key": process.env.SD_API_KEY,
      "Content-Type": "application/json",
      "sd-person-id": user.solidPersonId,
    };
    const { data } = await Axios.post(`${solidAPIUrl}/v1/card`, body, {
      headers,
    });
    return data;
  } catch (error) {
    console.log(error.response.data);
    solidErrorLogger(error.response.data);
    throw new Error(error);
  }
};

module.exports = { create };
