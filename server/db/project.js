const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const STATUS = {
  active: "active",
  inActive: "inActive",
};

const projectSchema = new mongoose.Schema({
  business: { type: ObjectId, required: true, ref: "Business" },
  client: String,
  projectManager: { type: ObjectId, required: false, ref: "User" },
  modifiedAt: { type: "Date" },
  dateAdded: { type: "Date", default: Date.now, required: true },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = {
  Project,
};
