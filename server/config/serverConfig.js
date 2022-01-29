let mongoURL;

require("dotenv").config();

if (process.env.NODE_ENV === "development") {
  mongoURL = "mongodb://localhost:27017/bluehat-db";
} else {
  mongoURL = process.env.MONGO_URL;
}

module.exports = {
  mongoURL,
};
