export type CardActionItem = {
  name: string;
  logo: string;
  alt: string;
  value: string;
};

export type Card = {
  name: string;
  number: string;
  validity: Date;
  cvv: number;
  isFrozen: boolean;
  isMasked: boolean;
};
