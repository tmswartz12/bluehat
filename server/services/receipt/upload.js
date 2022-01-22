const logger = require("pino")();
const { default: Axios } = require("axios");
const request = require("request");
var FormData = require("form-data");

const upload = async (file) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${process.env.BUTLER_LABS_API_KEY}`,
    };

    const body = {};

    // `files=@<PATH_TO_MY_FILE>;type=<MIME_TYPE_OF_FILE></MIME_TYPE_OF_FILE>`
    const formData = new FormData();
    formData.append("files", file);

    axios({
      method: "post",
      url: `https://app.butlerlabs.ai/api/queues/${process.env.BUTLER_LABS_QUEUE_ID}/uploads`,
      data: formData,
      headers,
    });
    // const { data } = await Axios.post(
    //   `https://app.butlerlabs.ai/api/queues/${process.env.BUTLER_LABS_QUEUE_ID}/uploads`,
    //   file,
    //   {
    //     headers,
    //   }
    // );

    // request.post(
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.BUTLER_LABS_API_KEY}`,
    //       "Content-Type": "multipart/form-data",
    //     },
    //     url: `https://app.butlerlabs.ai/api/queues/${process.env.BUTLER_LABS_QUEUE_ID}/uploads`,
    //     formData: file,
    //     data: file,
    //   },
    //   function (err, res, body) {
    //     //it works!
    //     // console.log("res", res);
    //   }
    // );

    // console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { upload };
