export interface Card {
  id: string;
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

export type NewCardData = Omit<Card, 'id'>;
