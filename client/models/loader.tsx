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
import { Loader } from "../types/loader";

export interface LoadingModel {
  data: Loader;
  setLoader: Action<LoadingModel, boolean>;
}

const initialLoader: Loader = {
  isLoading: false,
};

const loader: LoadingModel = {
  data: initialLoader,
  setLoader: action((state, payload) => {
    state.data.isLoading = payload;
  }),
};

export default loader;
