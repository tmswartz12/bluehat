import { Project } from "./project";
import { User } from "./user";

export type Transaction = {
  _id: string;
  business: string;
  user: User;
  card: string;
  solidCardId: string;
  solidTransactionId: string;
  solidTransferId: string;
  txnDate: string;
  amount: string;
  title: string;
  txnType: string;
  description: string;
  status: string;
  subType: string;
  dateAdded: string;
  merchant: {
    merchantCategory: string;
    merchantCategoryCode: string;
    merchantCity: string;
    merchantCountry: string;
    merchantName: string;
    merchantState: string;
    postalCode: string;
  };
  stage: string;
  project: Project;
};

export type Transactions = Transaction[];
