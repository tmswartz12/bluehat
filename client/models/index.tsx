import receipt, { ReceiptModel } from "./receipt";
import user, { UserModel } from "./user";
import business, { BusinessModel } from "./business";
import card, { CardModel } from "./card";
import project, { ProjectModel } from "./project";

export interface StoreModel {
  user: UserModel;
  receipt: ReceiptModel;
  business: BusinessModel;
  card: CardModel;
  project: ProjectModel;
}

const model: StoreModel = {
  user,
  receipt,
  business,
  card,
  project,
};

export default model;
