const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, index: true },
  firstName: String,
  lastName: String,
  password: String,
  phone: { type: "String", required: false, unique: true },
  dateOfBirth: String, // YYYY-MM-DD
  idNumber: String, // ex. "223902235"
  idType: String, // ssn
  address: {
    addressType: { type: "String", default: "mailing" },
    line1: String,
    line2: String,
    city: String,
    state: String, //  CA (Two letter Abbrev.)
    country: String, // US (Two letter Abbrev.)
    postalCode: String,
  },
  ownership: String,
  title: String,
  business: { type: ObjectId, ref: "Business" },
  solidPersonId: String,
  dateAdded: { type: "Date", default: Date.now, required: true },
});

const encryptPassword = (plainText, salt) => {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainText)
    .update(salt)
    .digest("hex");
};

const generateSalt = () => {
  return crypto.randomBytes(16).toString("base64");
};

userSchema.pre("save", async function (next) {
  const user = this;

  console.log("running pre save hook");
  // only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) {
    console.log("password not modified");
    return next();
  } else {
    /**
     * Comment out this section when running the migration.
     * Reason = we double encrypt the existing password if this section runs
     */
    user.salt = generateSalt();
    console.log("user.salt", user.salt);
    user.password = encryptPassword(this.password, user.salt);
  }
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return encryptPassword(candidatePassword, this.salt) === this.password;
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
