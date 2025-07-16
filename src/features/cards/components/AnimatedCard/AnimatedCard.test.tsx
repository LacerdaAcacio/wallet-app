import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/styles/theme';
import { Card } from '@/features/cards/types';
import { AnimatedCard } from './index';
import { UI } from './constants';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('react-native-responsive-screen', () => ({
  widthPercentageToDP: (val: string) => parseFloat(val),
  heightPercentageToDP: (val: string) => parseFloat(val),
}));

const mockCard: Card = {
  id: '1',
  name: 'John Doe',
  number: '1234567812345678',
  cvv: '123',
  expiry: '12/25',
};

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Feature: Cards / Component: AnimatedCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    const useAnimatedStyle = jest.spyOn(require('react-native-reanimated'), 'useAnimatedStyle');
    useAnimatedStyle.mockReturnValue({});
  });

  it('renders correctly', () => {
    renderWithTheme(<AnimatedCard card={mockCard} index={0} />);
    expect(screen.getByText(UI.CARD_TYPE_BLACK)).toBeTruthy();
  });

  it('shows details when focused', () => {
    renderWithTheme(<AnimatedCard card={mockCard} index={0} isFocused />);
    expect(screen.getByText('John Doe')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    renderWithTheme(<AnimatedCard card={mockCard} index={0} onPress={mockOnPress} />);
    fireEvent.press(screen.getByText(UI.CARD_TYPE_BLACK));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
