import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/styles/theme';
import HomeScreen from './index';
import { UI_STRINGS, SCREENS } from '@/constants';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Screen: Home', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('navigates to CardList when "meus cartões" button is pressed', () => {
    renderWithTheme(<HomeScreen />);
    const myCardsButton = screen.getByText(UI_STRINGS.myCardsButton);
    fireEvent.press(myCardsButton);
    expect(mockNavigate).toHaveBeenCalledWith(SCREENS.CARD_LIST);
  });

  it('navigates to AddCard when "cadastrar cartão" button is pressed', () => {
    renderWithTheme(<HomeScreen />);
    const addCardButton = screen.getByText(UI_STRINGS.addCardTitle);
    fireEvent.press(addCardButton);
    expect(mockNavigate).toHaveBeenCalledWith(SCREENS.ADD_CARD);
  });
});
