import receipt, { ReceiptModel } from "./receipt";
import user, { UserModel } from "./user";
import business, { BusinessModel } from "./business";

export interface StoreModel {
  user: UserModel;
  receipt: ReceiptModel;
  business: BusinessModel;
}

const model: StoreModel = {
  user,
  receipt,
  business,
};

export default model;
