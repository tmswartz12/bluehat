import { Action, thunk, action, Thunk, ActionOn, actionOn } from "easy-peasy";
import { User } from "../types/user";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { StoreModel } from "./index";
import axios from "axios";

export interface ReceiptModel {
  data: any;
  setReceipt: Action<ReceiptModel, User>;
  uploadReceipt: Thunk<ReceiptModel>;
}

const initialReceipt: any = {};

const user: ReceiptModel = {
  data: initialReceipt,
  setReceipt: action((state, payload) => {
    state.data = payload;
  }),
  uploadReceipt: thunk(async (actions, body) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/receipt/upload",
        body
      );
      const receipt = data.receipt;
      actions.setReceipt(receipt);
    } catch (err) {
      console.log("err", err);
    }
  }),
};

export default user;
