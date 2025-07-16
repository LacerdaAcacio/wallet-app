import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigation/types';
import { SCREENS } from '@/navigation/constants';
import { Alert } from 'react-native';
import {
  cardSchema,
  CardFormData,
} from '@/features/cards/validation/cardSchema';
import { useCards } from './useCards';
import { UI_STRINGS } from '@/constants';

type NavigationProps = StackNavigationProp<RootStackParamList, 'AddCard'>;

export const useAddCardForm = () => {
  const navigation = useNavigation<NavigationProps>();
  const { addCard, isAddingCard, addCardError } = useCards();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
    mode: 'onChange',
    defaultValues: { name: '', number: '', expiry: '', cvv: '' },
  });

  const submitForm = (data: CardFormData) => {
    addCard(data, {
      onSuccess: createdCard => {
        navigation.navigate(SCREENS.ADD_CARD_SUCCESS, { newCard: createdCard });
      },
    });
  };

  useEffect(() => {
    if (addCardError) {
      Alert.alert(
        UI_STRINGS.addCardErrorTitle,
        UI_STRINGS.addCardErrorMessage,
      );
    }
  }, [addCardError]);

  return {
    control,
    errors,
    isValid,
    isSubmitting: isAddingCard,
    submitForm: handleSubmit(submitForm),
  };
};
