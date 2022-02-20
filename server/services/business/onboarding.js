const { User, Business, Kyb } = require("../../db");
const SolidService = require("../solid");
const KybService = require("../kyb");

const onboarding = async (user, request) => {
  console.log("in the request", request);
  const {
    legalName,
    dba,
    entityType,
    idType,
    idNumber,
    formationDate,
    industry,
    address,
    title,
    ownership,
  } = request;
  try {
    address.addressType = "mailing";
    const foundUser = await User.findOne({ _id: user });
    foundUser.title = title;
    foundUser.ownership = ownership;
    const business = {
      legalName,
      dba,
      entityType,
      idType,
      idNumber,
      formationDate,
      industry,
      address,
      phone: user.phone,
      email: user.email,
    };

    const createdBusiness = await Business.create(business);
    const solidBusiness = await SolidService.BUSINESS.create(
      foundUser,
      createdBusiness
    );

    createdBusiness.solidBusinessId = solidBusiness.id;

    foundUser.business = createdBusiness._id;
    foundUser.onboardingStatus = "complete";
    const savedUser = await foundUser.save();

    await KybService.create(createdBusiness, solidBusiness);
    /**
     * Solid requires us to associate a PERSON to a BUSINESS by creating a business MEMBER
     * https://www.solidfi.com/docs/introduction-to-member
     */
    // await SolidService.BUSINESS.createMember(savedUser, createdBusiness);

    const savedBusiness = await createdBusiness.save();
    return { business: savedBusiness, user: savedUser };
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
module.exports = { onboarding };
