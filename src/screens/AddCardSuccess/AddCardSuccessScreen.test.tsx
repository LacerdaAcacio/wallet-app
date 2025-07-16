import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/styles/theme';
import { Card } from '@/features/cards/types';
import AddCardSuccessScreen from './index';
import { UI_STRINGS } from '@/constants';

const mockNavigate = jest.fn();
const mockCard: Card = {
  id: '123',
  name: 'John Doe',
  number: '1234567812345678',
  cvv: '123',
  expiry: '12/25',
};

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
  useRoute: () => ({
    params: {
      newCard: mockCard,
    },
  }),
}));

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Screen: AddCardSuccess', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders the success message and card details correctly', () => {
    renderWithTheme(<AddCardSuccessScreen />);

    expect(screen.getByText(UI_STRINGS.addCardSuccess)).toBeTruthy();
    expect(screen.getByText(/John Doe/)).toBeTruthy();
    expect(screen.getByText(/5678/)).toBeTruthy();
  });

  it('navigates to CardList screen when the button is pressed', () => {
    renderWithTheme(<AddCardSuccessScreen />);

    const advanceButton = screen.getByText(UI_STRINGS.advanceButton);
    fireEvent.press(advanceButton);

    expect(mockNavigate).toHaveBeenCalledWith('CardList');
  });
});
