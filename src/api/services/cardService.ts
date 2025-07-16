import { api } from '../';
import { Card } from '@/features/cards/types';
import { API_CONFIG } from '@/constants/api';

type NewCardData = Omit<Card, 'id'>;

export const createCard = async (cardData: NewCardData): Promise<Card> => {
  try {
    const { data } = await api.post<Card>(API_CONFIG.ENDPOINTS.CARDS, cardData);
    return data;
  } catch (error) {
    console.error('API Error: Failed to create card', error);
    throw new Error('Não foi possível criar o cartão.');
  }
};

export const getCards = async (): Promise<Card[]> => {
  try {
    const { data } = await api.get<Card[]>(API_CONFIG.ENDPOINTS.CARDS);
    return data;
  } catch (error) {
    console.error('API Error: Failed to get cards', error);
    throw new Error('Não foi possível buscar os cartões.');
  }
};
