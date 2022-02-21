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
import history from "../history";
import { Business, KYB } from "../types/business";

export interface BusinessModel {
  loading: Boolean;
  setLoading: Action<BusinessModel, Boolean>;
  data: Business;
  employees: Array<User>;
  setEmployees: Action<BusinessModel, Array<User>>;
  kyb: KYB;
  setKyb: Action<BusinessModel, KYB>;
  setBusiness: Action<BusinessModel, Business>;
  getBusiness: Thunk<BusinessModel>;
  onboarding: Thunk<BusinessModel, Business>;
  setUser: Action<BusinessModel, User>;
}

const initialBusiness: Business = {
  _id: "",
  legalName: "",
  address: {},
};

const initialKyb: KYB = {
  business: "",
  dateAdded: "",
  modifiedAt: "",
  results: {
    idv: "notStarted",
    address: "notStarted",
    dateOfBirth: "notStarted",
    fraud: "notStarted",
  },
  address: "notStarted",
  dateOfBirth: "notStarted",
  fraud: "notStarted",
  idv: "notStarted",
  reviewMessage: "",
  solidBusinessId: "",
  status: "notStarted",
  _id: "",
};

const business: BusinessModel = {
  data: initialBusiness,
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  onboarding: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      const { data } = await apiCaller(
        "api/business/onboarding",
        "post",
        payload
      );
      const business = data.business;
      actions.setBusiness(business);
      actions.setUser(data.user);
      actions.setLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  }),

  getBusiness: thunk(async (actions, payload) => {
    try {
      const { data } = await apiCaller("api/business/", "get", payload);
      const business = data.business;
      actions.setBusiness(business.data);
      actions.setEmployees(business.employees);
      actions.setKyb(business.kyb);
    } catch (err) {
      console.log("err", err);
    }
  }),
  setBusiness: action((state, payload) => {
    state.data = payload;
  }),
  setUser: action((state, payload) => {
    /**
     * This is purely used to set the user state in the user model
     * there is an actionOn event listener waiting for this action to be called
     * We call business.setUser to update state and pass the updated user
     * to the user model after onboarding is complete
     */
  }),
  employees: [],
  setEmployees: action((state, payload) => {
    state.employees = payload;
  }),
  kyb: initialKyb,
  setKyb: action((state, payload) => {
    state.kyb = payload;
  }),
};

export default business;
