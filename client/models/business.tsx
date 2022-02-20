import {
  Action,
  thunk,
  action,
  Thunk,
  ActionOn,
  actionOn,
  thunkOn,
  ThunkOn,
} from "easy-peasy";
import { User } from "../types/user";
import { apiCaller } from "../util/apiCaller";
import { setAuthCookie } from "../util/cookies";
import history from "../history";
import { Business } from "../types/business";

import { useStoreActions } from "../store";
import { UserModel } from "./user";

export interface BusinessModel {
  data: Business;
  setBusiness: Action<BusinessModel, Business>;
  getBusiness: Thunk<BusinessModel, Business>;
  onboarding: Thunk<BusinessModel, { user: User; business: Business }>;
}

const initialBusiness: Business = {
  _id: "",
  legalName: "",
  address: {},
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
  setBusiness: action((state, payload) => {
    state.data = payload;
  }),
};

export default business;
