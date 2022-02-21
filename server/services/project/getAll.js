const logger = require("pino")();
const { Project } = require("../../db");

const getAll = async (user) => {
  try {
    const projects = await Project.find({ business: user.business });
    return projects;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { getAll };
