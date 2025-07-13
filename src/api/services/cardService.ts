import { api } from '../';
import { Card, NewCardData } from '../../@types/card';

export const createCard = async (cardData: NewCardData): Promise<Card> => {
  const { data } = await api.post('/cards', cardData);
  return data;
};

export const getCards = async (): Promise<Card[]> => {
  const { data } = await api.get('/cards');
  return data;
};
