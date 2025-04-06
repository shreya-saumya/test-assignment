import type { Card } from 'src/components/card/types/CardTypes';

export const createRandomCardDetails = (name: Card['name']) => {
  //

  const number = '4' + Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).join('');
  const today = new Date();
  const futureDate = new Date();
  futureDate.setFullYear(today.getFullYear() + Math.floor(Math.random() * 10));

  const cvv = Math.floor(100 + Math.random() * 900);

  const user = {
    name,
    number,
    validity: futureDate,
    cvv,
    isFrozen: false,
    isMasked: true,
  };
  return user;
  // user.number
};

export const maskNumber = (cardNumber: Card['number']) => {
  // Show only last 4 digits
  const last4 = cardNumber.slice(-4);
  return '•••• •••• •••• ' + last4;
};
export const unmaskCardNumber = (cardNumber: Card['number']) => {
  return cardNumber.replace(/(.{4})/g, '$1 ').trim();
};
