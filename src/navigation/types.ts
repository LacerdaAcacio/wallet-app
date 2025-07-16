import { Card } from '@/features/cards/types';
import { SCREENS } from './constants';
import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.ADD_CARD]: undefined;
  [SCREENS.ADD_CARD_SUCCESS]: { newCard: Card };
  [SCREENS.CARD_LIST]: undefined;
};

export type AddCardSuccessScreenProps = StackScreenProps<
  RootStackParamList,
  typeof SCREENS.ADD_CARD_SUCCESS
>;

export type HomeScreenProps = StackScreenProps<RootStackParamList, typeof SCREENS.HOME>;
