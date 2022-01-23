const { runJobs } = require("./runJobs");
const logger = require("pino")();

const mongoose = require("mongoose");
const { serverConfig } = require("../config");
function connectToMongo(callback) {
  mongoose.Promise = global.Promise;
  console.log("serverConfig", serverConfig);

  mongoose.connection.on("error", logger.error);
  mongoose.connect(serverConfig.mongoURL, (error) => {
    if (error) {
      console.error("Please make sure Mongodb is installed and running!"); // eslint-disable-line no-console
      throw error;
    } else {
      callback();
    }
  });
}

// Main

connectToMongo(async () => {
  logger.info("batchJobs - connected to mongo");

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  await sleep(1000);

  runJobs()
    .then(() => {
      logger.info("Ran batch jobs");
      process.exit(0);
    })
    .catch((error) => {
      logger.error(
        {
          error: error.message,
          stack: error.stack,
        },
        "Error running batch jobs"
      );
      process.exit(1);
    });
});
