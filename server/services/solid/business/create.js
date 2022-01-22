const { default: Axios } = require("axios");
const {
  solidAPIUrl,
  solidErrorLogger,
} = require("../../../config/solidConfig");

const logger = require("pino")();

const create = async (user, createdBusiness) => {
  const {
    legalName,
    dba,
    entityType,
    idType,
    idNumber,
    formationDate,
    industry,
    address,
    phone,
    email,
  } = createdBusiness;
  try {
    const headers = {
      "sd-api-key": process.env.SD_API_KEY,
      "Content-Type": "application/json",
      "sd-person-id": user.solidPersonId,
    };

    const body = {
      legalName,
      dba,
      entityType,
      idType,
      idNumber,
      formationDate,
      industry,
      address,
      phone,
      email,
    };

    const { data } = await Axios.post(`${solidAPIUrl}/v1/business`, body, {
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
