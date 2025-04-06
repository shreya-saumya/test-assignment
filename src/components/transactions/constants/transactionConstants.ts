import type { Transaction } from 'src/components/transactions/types/TransactionTypes';

export const TRANSACTIONS_LIST: Transaction[] = [
  {
    name: 'Hamleys',
    date: new Date(),
    amount: '150',
    type: 'credit',
    description: 'Refund on debit card',
    iconSrc: '/assets/common/file-storage.svg',
    bgColor: '#009DFF1A',
  },
  {
    name: 'Hamleys',
    date: new Date(),
    amount: '150',
    type: 'debit',
    description: 'Charged to debit card',
    iconSrc: '/assets/common/flights.svg',
    bgColor: '#00D6B51A',
  },
  {
    name: 'Hamleys',
    date: new Date(),
    amount: '150',
    type: 'debit',
    description: 'Charged to debit card',
    iconSrc: '/assets/common/megaphone.svg',
    bgColor: '#F251951A',
  },
  {
    name: 'Hamleys',
    date: new Date(),
    amount: '150',
    type: 'debit',
    description: 'Charged to debit card',
    iconSrc: '/assets/common/file-storage.svg',
    bgColor: '#009DFF1A',
  },
];
