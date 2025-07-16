import React from 'react';
import { createStackNavigator, StackCardStyleInterpolator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import HomeScreen from '../screens/Home';
import AddCardScreen from '../screens/AddCard';
import AddCardSuccessScreen from '../screens/AddCardSuccess';
import CardListScreen from '../screens/CardList';

const Stack = createStackNavigator<RootStackParamList>();

const stackNavigatorOptions = {
  headerShown: false,
  cardStyleInterpolator: (({ current: { progress } }: { current: { progress: any } }) => ({
    cardStyle: {
      opacity: progress,
      overflow: 'visible',
    },
  })) as StackCardStyleInterpolator,
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="AddCardSuccess" component={AddCardSuccessScreen} />
      <Stack.Screen name="CardList" component={CardListScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
