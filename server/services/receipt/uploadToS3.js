const logger = require("pino")();
const { default: Axios } = require("axios");
const { s3 } = require("../../config/awsConfig");
var FormData = require("form-data");
var fs = require("fs");

const uploadToS3 = async (file) => {
  try {
    const FILE_PERMISSION = "public-read";

    const params = {
      Bucket: "bluehat-receipts",
      Key: file.filename,
      Body: fs.createReadStream(file.path),
      ACL: FILE_PERMISSION,
    };

    const response = await s3.putObject(params).promise();

    return `https://bluehat-receipts.s3.us-east-2.amazonaws.com/${file.filename}`;
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { uploadToS3 };
