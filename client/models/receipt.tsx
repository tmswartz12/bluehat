import { Action, thunk, action, Thunk, ActionOn, actionOn } from "easy-peasy";
import { User } from "../types/user";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { StoreModel } from "./index";
import axios from "axios";
import { apiCaller } from "../util/apiCaller";

export interface ReceiptModel {
  data: any;
  setReceipt: Action<ReceiptModel, User>;
  uploadReceipt: Thunk<ReceiptModel, { data: any; transactionId: string }>;
}

const initialReceipt: any = {};

const user: ReceiptModel = {
  data: initialReceipt,
  setReceipt: action((state, payload) => {
    state.data = payload;
  }),
  uploadReceipt: thunk(async (actions, body) => {
    try {
      const { data } = await apiCaller(
        `api/receipt/upload/${body.transactionId}`,
        "post",
        body.data
      );
      const receipt = data.receipt;
      actions.setReceipt(receipt);
    } catch (err) {
      console.log("err", err);
    }
  }),
};

export default user;
