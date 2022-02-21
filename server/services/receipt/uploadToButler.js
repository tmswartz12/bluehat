const logger = require("pino")();
const { default: Axios } = require("axios");
const request = require("request");
var FormData = require("form-data");
var fs = require("fs");
const { exit } = require("process");

const uploadToButler = async (file) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${process.env.BUTLER_LABS_API_KEY}`,
    };
    const apiBaseUrl = "https://app.butlerlabs.ai/api";
    const authHeaders = {
      Authorization: `Bearer ${process.env.BUTLER_LABS_API_KEY}`,
    };
    const queueId = process.env.BUTLER_LABS_QUEUE_ID;

    // Specify the path to the file you would like to process
    const filePaths = [`${file.path}`];

    // Specify the API URL
    const uploadUrl = `${apiBaseUrl}/queues/${queueId}/uploads`;
    const formData = new FormData();

    filePaths.forEach((filePath) => {
      console.log(filePath);
      formData.append("files", fs.createReadStream(filePath));
    });
    // Upload files to the upload API
    let uploadId;
    const { data } = await Axios.post(uploadUrl, formData, {
      headers: { ...authHeaders, ...formData.getHeaders() },
    });
    // .then((uploadRes) => {
    //   // Get the Upload ID
    //   uploadId = uploadRes.data.uploadId;
    //   console.log("uploadId", uploadId);
    //   return uploadId;
    // });

    return data.uploadId;

    console.log("uploadId", uploadId);
    return uploadId;
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { uploadToButler };
