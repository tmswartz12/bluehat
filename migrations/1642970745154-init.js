require("dotenv").config();

const mongoose = require("mongoose");
const { User } = require("../server/db");

if (mongoose.connection.readyState !== mongoose.STATE_OPEN) {
  mongoose.connect(process.env.MONGO_URL);
}

/**
 * Make any changes you need to make to the database here
 */
async function up() {
  // Write migration here

  const users = await User.find({});

  await Promise.all(
    users.map(async (user) => {
      // await user.save();
    })
  );
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  // Write migration here
}

module.exports = { up, down };
