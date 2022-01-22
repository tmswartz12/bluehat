const { User, Business, Kyb } = require("../../db");
const SolidService = require("../solid");
const KybService = require("../kyb");

const onboarding = async (user, request) => {
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
    const savedUser = await foundUser.save();

    await KybService.create(createdBusiness, solidBusiness);
    /**
     * Solid requires us to associate a PERSON to a BUSINESS by creating a business MEMBER
     * https://www.solidfi.com/docs/introduction-to-member
     */
    // await SolidService.BUSINESS.createMember(savedUser, createdBusiness);

    return await createdBusiness.save();
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
module.exports = { onboarding };
