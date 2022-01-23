const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const ENTITY_TYPE = {
  soleProprietor: "soleProprietor",
  singleMemberLLC: "singleMemberLLC",
  limitedLiabilityCompany: "limitedLiabilityCompany",
  generalPartnership: "generalPartnership",
  unlistedCorporation: "unlistedCorporation",
  publiclyTradedCorporation: "publiclyTradedCorporation",
  association: "association",
  nonProfit: "nonProfit",
  governmentOrganization: "governmentOrganization",
  revocableTrust: "revocableTrust",
  irrevocableTrust: "irrevocableTrust",
  estate: "estate",
};

const BUSINESS_ID_TYPE = {
  ein: "ein",
  ssn: "ssn",
};

const INDUSTRY_TYPE = {
  construction: "construction",
  retail: "retail",
  wholesale: "wholesale",
  restaurants: "restaurants",
  hospitals: "hospitals",
  insurance: "insurance",
  unions: "unions",
  realEstate: "realEstate",
  freelanceProfessional: "freelanceProfessional",
  otherProfessionalServices: "otherProfessionalServices",
  onlineRetailer: "onlineRetailer",
  otherEducationServices: "otherEducationServices",
};

const BLUE_HAT_STATUS = {
  pending_credit_decision: "pending_credit_decision",
  approved: "approved",
  rejected: "rejected",
};

const businessSchema = new mongoose.Schema({
  legalName: String, //legal name of the business
  dba: String,
  creditLimit: { type: Number, default: 0, required: true },
  blueHatStatus: {
    type: String,
    enum: Object.values(BLUE_HAT_STATUS),
    default: BLUE_HAT_STATUS.pending_credit,
  },
  entityType: {
    type: String,
    enum: Object.values(ENTITY_TYPE),
  }, //
  email: String, // pull from Owner Model,
  idType: {
    type: String,
    enum: Object.values(BUSINESS_ID_TYPE),
  },
  idNumber: {
    type: String,
  },
  phone: String, // pull from Owner Model,
  formationDate: String, //YYYY-MM-DD
  industry: {
    type: String,
    default: INDUSTRY_TYPE.construction,
    enum: Object.values(INDUSTRY_TYPE),
  },
  address: {
    addressType: String,
    line1: String,
    line2: String,
    city: String,
    state: String, //  CA (Two letter Abbrev.)
    country: String, // US (Two letter Abbrev.)
    postalCode: String,
  },
  solidBusinessId: String, // returned from POST /business
  dateAdded: { type: "Date", default: Date.now, required: true },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = {
  Business,
};
