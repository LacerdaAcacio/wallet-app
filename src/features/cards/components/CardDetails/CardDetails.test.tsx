import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/styles/theme';
import { Card } from '@/features/cards/types';
import CardDetails from './index';

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

describe('Feature: Cards / Component: CardDetails', () => {
  it('renders card holder name, masked number and expiry date', () => {
    renderWithTheme(<CardDetails card={mockCard} variant="black" />);
    expect(screen.getByText('John Doe')).toBeTruthy();
    expect(screen.getByText(/5678/)).toBeTruthy();
    expect(screen.getByText('12/25')).toBeTruthy();
  });
});
