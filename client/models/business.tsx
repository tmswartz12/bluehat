import { Action, thunk, action, Thunk, ActionOn, actionOn } from "easy-peasy";
import { User } from "../types/user";
import { apiCaller } from "../util/apiCaller";
import { setAuthCookie } from "../util/cookies";
import history from "../history";

export interface BusinessModel {
  data: User;
  setBusiness: Action<BusinessModel, User>;
  getBusiness: Thunk<BusinessModel>;
  onboarding: Thunk<
    BusinessModel,
    {
      firstName?: string;
      lastName?: string;
      phone?: string;
      dateOfBirth?: string;
      address?: {
        line1?: string;
        line2?: string;
        city?: string;
        state?: string;
        country?: string;
        postalCode?: string;
      };
      idNumber?: string;
      idType?: string;
    }
  >;
}

const initialBusiness: Business = {
  _id: "",
  legalName: "",
};

const business: BusinessModel = {
  data: initialBusiness,
  onboarding: thunk(async (actions, payload) => {
    try {
      const { data } = await apiCaller(
        "api/business/onboarding",
        "post",
        payload
      );
      const business = data.business;
      actions.setBusiness(business);
    } catch (err) {
      console.log("err", err);
    }
  }),
};

export default business;
