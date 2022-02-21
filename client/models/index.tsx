import receipt, { ReceiptModel } from "./receipt";
import user, { UserModel } from "./user";
import business, { BusinessModel } from "./business";
import loader, { LoadingModel } from "./loader";

export interface StoreModel {
  user: UserModel;
  receipt: ReceiptModel;
  business: BusinessModel;
  loader: LoadingModel;
}

const model: StoreModel = {
  user,
  receipt,
  business,
  loader,
};

export default model;
