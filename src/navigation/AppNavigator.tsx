import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolationProps,
} from '@react-navigation/stack';
import HomeScreen from '@/screens/Home';
import AddCardScreen from '@/screens/AddCard';
import AddCardSuccessScreen from '@/screens/AddCardSuccess';
import CardListScreen from '@/screens/CardList';
import { RootStackParamList } from './types';
import { SCREENS } from './constants';

const Stack = createStackNavigator<RootStackParamList>();

const forFade: (props: CardStyleInterpolationProps) => any = ({
  current,
}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const AppNavigatorComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: forFade,
      }}
    >
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen name={SCREENS.ADD_CARD} component={AddCardScreen} />
      <Stack.Screen
        name={SCREENS.ADD_CARD_SUCCESS}
        component={AddCardSuccessScreen}
      />
      <Stack.Screen name={SCREENS.CARD_LIST} component={CardListScreen} />
    </Stack.Navigator>
  );
};

export const AppNavigator = React.memo(AppNavigatorComponent);
