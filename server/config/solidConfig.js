let solidAPIUrl;

require("dotenv").config();
const logger = require("pino")({
  transport: {
    target: "pino-pretty",
  },
});

if (process.env.NODE_ENV === "development") {
  solidAPIUrl = "https://test-api.solidfi.com";
} else {
  solidAPIUrl = "https://api.solidfi.com";
}

const solidErrorLogger = (error) => {
  const solidError = {
    requestId: error.requestId,
    status: error.status,
    message: error.message,
    status: error.status,
    sysMessage: error.sysMessage,
  };
  logger.error(solidError);
};

module.exports = {
  solidAPIUrl,
  solidErrorLogger,
};
