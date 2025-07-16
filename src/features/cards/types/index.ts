export interface Card {
  id: string;
  number: string;
  name: string;
  cvv: string;
  expiry?: string;
}

export type CardVariant = 'black' | 'green';
