const { default: Axios } = require("axios");
const {
  solidAPIUrl,
  solidErrorLogger,
} = require("../../../config/solidConfig");

const logger = require("pino")();

const create = async (user) => {
  try {
    const headers = {
      "sd-api-key": process.env.SD_API_KEY,
      "Content-Type": "application/json",
    };

    const body = {
      address: user.address,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      firstName: user.firstName,
      idNumber: user.idNumber,
      idType: user.idType,
      lastName: user.lastName,
      phone: user.phone,
    };

    const { data } = await Axios.post(`${solidAPIUrl}/v1/person`, body, {
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
