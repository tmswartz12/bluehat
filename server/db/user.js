const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: String,
  lastName: String,
  password: String,
  phone: { type: "String", unique: true },
  dateOfBirth: String, // YYYY-MM-DD
  idNumber: String, // ex. "223902235"
  idType: String, // ssn
  address: {
    addressType: { type: "String", default: "mailing" },
    line1: String,
    line2: String,
    city: String,
    state: String, //  CA (Two letter Abbrev.)
    countr: String, // US (Two letter Abbrev.)
    postalCode: String,
  },
  ownership: String,
  title: String,
  user: { type: ObjectId, ref: "Business" },
  solidPersonId: String,
  dateAdded: { type: "Date", default: Date.now, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
