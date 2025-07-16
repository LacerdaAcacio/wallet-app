import { useNavigation, useRoute } from '@react-navigation/native';
import { AddCardSuccessScreenProps } from '@/navigation/types';
import { SCREENS } from '@/navigation/constants';

export const useAddCardSuccess = () => {
  const navigation = useNavigation<AddCardSuccessScreenProps['navigation']>();
  const route = useRoute<AddCardSuccessScreenProps['route']>();

  const { newCard } = route.params;

  const handleFinish = () => {
    navigation.navigate(SCREENS.CARD_LIST);
  };

  return {
    newCard,
    handleFinish,
  };
};
