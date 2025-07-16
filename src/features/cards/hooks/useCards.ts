import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createCard, getCards } from '@/api/services/cardService';
import { CardData } from '@/features/cards/types';
import { queryKeys } from '@/constants/queryKeys';

export const useCards = () => {
  const queryClient = useQueryClient();

  const {
    data: cards,
    isLoading: isLoadingCards,
    isError: isErrorCards,
  } = useQuery({
    queryKey: queryKeys.cards,
    queryFn: getCards,
  });

  const {
    mutate: addCard,
    isPending: isAddingCard,
    error: addCardError,
  } = useMutation({
    mutationFn: (newCard: Omit<CardData, 'id'>) => createCard(newCard),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.cards });
    },
    onError: error => {
      console.error('Erro ao adicionar cartão:', error);
    },
  });

  return {
    cards,
    isLoadingCards,
    isErrorCards,
    addCard,
    isAddingCard,
    addCardError,
  };
};
