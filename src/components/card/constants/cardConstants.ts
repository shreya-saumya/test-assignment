import type { Card } from '../types/CardTypes';

export const CARDS_PAGE_TABS = ['My debit cards', 'All company cards'];

export const CARDS_LIST: Card[] = [
  {
    name: 'Saumya',
    number: '1234123412341234',
    validity: new Date(),
    cvv: 123,
    isFrozen: false,
    isMasked: true,
  },
  {
    name: 'Kamal',
    number: '0984349212433895',
    validity: new Date(),
    cvv: 177,
    isFrozen: false,
    isMasked: true,
  },
  {
    name: 'Kasam',
    number: '1234542489741234',
    validity: new Date(),
    cvv: 345,
    isFrozen: true,
    isMasked: true,
  },
];
