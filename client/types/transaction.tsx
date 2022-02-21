export type Transaction = {
  _id: string;
  business: string;
  user: string;
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
};

export type Transactions = Transaction[];
