import { Card } from '../@types/card';

export type RootStackParamList = {
  Home: undefined;
  AddCard: undefined;
  AddCardSuccess: { newCard: Card };
  CardList: undefined;
};
