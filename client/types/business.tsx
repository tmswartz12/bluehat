export type Business = {
  _id?: string;
  legalName?: string;
  dba?: string;
  entityType?: string;
  idType?: string;
  idNumber?: string;
  phone?: string;
  industry?: string;
  blueHatStatus?: string;
  formationDate?: string;
  address: {
    addressType?: string;
    line1?: string;
    line2?: string;
    city?: string;
    state?: string; //  CA (Two letter Abbrev.)
    country?: string; // US (Two letter Abbrev.)
    postalCode?: string;
  };
  solidBusinessId?: string;
  dateAdded?: string;
  title?: string;
  ownership?: string;
};

export type KYB = {
  business: string;
  dateAdded: string;
  modifiedAt: string;
  results: {
    idv: string;
    address: string;
    dateOfBirth: string;
    fraud: string;
  };
  address: string;
  dateOfBirth: string;
  fraud: string;
  idv: string;
  reviewMessage: string;
  solidBusinessId: string;
  status: string;
  _id: string;
};
