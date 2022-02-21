import receipt, { ReceiptModel } from "./receipt";
import user, { UserModel } from "./user";
import business, { BusinessModel } from "./business";
import card, { CardModel } from "./card";

export interface StoreModel {
  user: UserModel;
  receipt: ReceiptModel;
  business: BusinessModel;
  card: CardModel;
}

const model: StoreModel = {
  user,
  receipt,
  business,
  card,
};

export default model;
