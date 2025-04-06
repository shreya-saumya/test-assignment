export type Transaction = {
  name: string;
  date: Date;
  amount: string;
  type: 'debit' | 'credit';
  description: string;
  iconSrc: string;
  bgColor: string;
};
