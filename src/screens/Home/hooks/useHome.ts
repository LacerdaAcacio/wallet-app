import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from '@/navigation/types';
import { SCREENS } from '@/navigation/constants';

export const useHome = () => {
  const navigation = useNavigation<HomeScreenProps['navigation']>();

  const handleNavigateToCardList = () => {
    navigation.navigate(SCREENS.CARD_LIST);
  };

  const handleNavigateToAddCard = () => {
    navigation.navigate(SCREENS.ADD_CARD);
  };

  return {
    handleNavigateToCardList,
    handleNavigateToAddCard,
  };
};
