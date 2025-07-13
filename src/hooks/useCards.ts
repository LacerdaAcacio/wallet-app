import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createCard, getCards } from '../api/services/cardService';
import { NewCardData } from '../@types/card';
import { Alert } from 'react-native';

export const useCards = () => {
  const queryClient = useQueryClient();
  const {
    data: cards,
    isLoading: isLoadingCards,
    isError: isErrorCards,
  } = useQuery({
    queryKey: ['cards'],
    queryFn: getCards,
  });

  const { mutate: addCard, isPending: isAddingCard } = useMutation({
    mutationFn: (newCard: NewCardData) => createCard(newCard),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cards'] });
    },
    onError: error => {
      console.error('Erro ao adicionar cartão:', error);
      Alert.alert('Erro', 'Não foi possível adicionar o cartão. Tente novamente.');
    },
  });

  return { cards, isLoadingCards, isErrorCards, addCard, isAddingCard };
};
