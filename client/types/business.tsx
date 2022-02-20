export type Business = {
  _id: string;
  legalName?: string;
  entityType?: string;
  idType?: string;
  idNumber?: boolean;
  phone?: string;
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
};
