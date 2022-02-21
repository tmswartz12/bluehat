import {
  Action,
  thunk,
  action,
  Thunk,
  ActionOn,
  actionOn,
  thunkOn,
} from "easy-peasy";
import { Transaction, Transactions } from "../types/transaction";
import { apiCaller } from "../util/apiCaller";

export interface TransactionModel {
  loading: Boolean;
  setLoading: Action<TransactionModel, Boolean>;
  allTransactions: Transactions;
  setTransactions: Action<TransactionModel, Transactions>;
  getTransactions: Thunk<TransactionModel>;
}

const initialTransaction: Transaction = {
  _id: "",
};

const transactions: Transactions = [];

const transaction: TransactionModel = {
  allTransactions: transactions,
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
  setTransactions: action((state, payload) => {
    state.allTransactions = payload;
  }),
  getTransactions: thunk(async (actions) => {
    try {
      const { data } = await apiCaller("api/transaction", "get", null);
      const transactions = data.transactions;
      actions.setTransactions(transactions);
    } catch (err) {
      console.log("err", err);
    }
  }),
};

export default transaction;
