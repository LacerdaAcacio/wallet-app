import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './index';

jest.mock('@/screens/Home', () => () => null);
jest.mock('@/screens/AddCard', () => () => null);
jest.mock('@/screens/AddCardSuccess', () => () => null);
jest.mock('@/screens/CardList', () => () => null);

describe('Navigation: AppNavigator', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>,
    );

    expect(toJSON()).not.toBeNull();
  });
});
