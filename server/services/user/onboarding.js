const { User } = require("../../db");
const SolidService = require("../solid");
const KycService = require("../kyc");

const onboarding = async (user, request) => {
  try {
    const foundUser = await User.findOne({ _id: user._id });
    if (!foundUser) {
      throw new Error("User not found");
    }

    /**
     * This is the first step of collecting user
     * information during onboarding.
     */

    if (request.firstName) {
      foundUser.firstName = request.firstName;
    }

    if (request.lastName) {
      foundUser.lastName = request.lastName;
    }

    if (request.dateOfBirth) {
      foundUser.dateOfBirth = request.dateOfBirth;
    }

    if (request.phone) {
      foundUser.phone = request.phone;
      foundUser.onboardingStatus = "userAddress";
    }

    /**
     * This is the second step of collecting user
     * information during onboarding.
     */

    if (request.address) {
      foundUser.address = request.address;
      foundUser.address.addressType = "mailing";
      foundUser.onboardingStatus = "socialSecurityNumber";
    }

    /**
     * This is the last step of collecting user
     * information during onboarding. We can proceed
     * with creating a solid user once an SSN is provided.
     */
    if (request.idNumber) {
      foundUser.idNumber = request.idNumber;
      foundUser.idType = "ssn";
      foundUser.onboardingStatus = "businessInfo";
      const savedUser = await foundUser.save();
      const solidPerson = await SolidService.PERSON.create(savedUser);
      savedUser.solidPersonId = solidPerson.id;
      await KycService.create(savedUser, solidPerson);
      await KycService.submit(savedUser);
    }

    const savedUser = await foundUser.save();

    return await savedUser.save();
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
module.exports = { onboarding };
