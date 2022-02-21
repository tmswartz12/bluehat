import {
  Action,
  thunk,
  action,
  Thunk,
  ActionOn,
  actionOn,
  thunkOn,
} from "easy-peasy";
import { User } from "../types/user";
import { apiCaller } from "../util/apiCaller";
import { setAuthCookie } from "../util/cookies";
import history from "../history";
import { BusinessModel } from "./business";
import { StoreModel } from "./index";

export interface UserModel {
  loading: Boolean;
  setLoading: Action<UserModel, Boolean>;
  data: User;
  setUser: Action<UserModel, User>;
  getUser: Thunk<UserModel>;
  register: Thunk<UserModel, { email: string }>;
  onboarding: Thunk<
    UserModel,
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
  updateUser: ActionOn<UserModel, StoreModel>;
}

const initialUser: User = {
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  isAdmin: false,
  address: {},
  onboardingStatus: "",
};

const user: UserModel = {
  data: initialUser,
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setUser: action((state, payload) => {
    state.data = payload;
  }),
  getUser: thunk(async (actions) => {
    try {
      const { data } = await apiCaller("api/user/", "get", null);
      const user = data.user;
      actions.setUser(user);
    } catch (err) {
      console.log("err", err);
    }
  }),
  register: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      const { data } = await apiCaller("api/user/signup", "post", payload);
      console.log("data", data);
      const user = data.user;
      const authToken = data.authToken;
      setAuthCookie(user._id, authToken);
      actions.setUser(user);
      actions.setLoading(false);
      history.push("/onboarding");
    } catch (err) {
      console.log("err", err);
    }
  }),
  onboarding: thunk(async (actions, payload) => {
    actions.setLoading(true);
    try {
      const { data } = await apiCaller("api/user/onboarding", "post", payload);
      const user = data.user;
      actions.setUser(user);
      actions.setLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  }),
  updateUser: actionOn(
    (actions, storeActions) => storeActions.business.setUser,
    (state, target) => {
      state.data = target.payload;
    }
  ),
};

export default user;
