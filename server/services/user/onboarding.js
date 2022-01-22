const { User } = require("../../db");
const SolidService = require("../solid");
const KycService = require("../kyc");

const onboarding = async (user, request) => {
  try {
    const foundUser = await User.findOne({ _id: user._id });
    if (!foundUser) {
      throw new Error("User not found");
    }
    foundUser.firstName = request.firstName;
    foundUser.lastName = request.lastName;
    foundUser.address = request.address;
    foundUser.address.addressType = "mailing";
    foundUser.dateOfBirth = request.dateOfBirth;
    foundUser.idNumber = request.idNumber;
    foundUser.idType = "ssn";
    foundUser.phone = request.phone;
    const savedUser = await foundUser.save();

    const solidPerson = await SolidService.PERSON.create(savedUser);
    await KycService.create(savedUser, solidPerson);
    savedUser.solidPersonId = solidPerson.id;
    return await savedUser.save();
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
module.exports = { onboarding };
