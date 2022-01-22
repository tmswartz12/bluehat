import receipt, { ReceiptModel } from "./receipt";
import user, { UserModel } from "./user";

export interface StoreModel {
  user: UserModel;
  receipt: ReceiptModel;
}

const model: StoreModel = {
  user,
  receipt,
};

export default model;
