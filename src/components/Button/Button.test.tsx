import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/styles/theme';
import { Button } from './index';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Component: Button', () => {
  it('should render with the primary variant by default', () => {
    const { getByTestId } = renderWithTheme(
      <Button title="Primary" testID="my-button" />,
    );
    const buttonElement = getByTestId('my-button');
    expect(buttonElement.props.style.backgroundColor).toEqual(
      theme.colors.primary,
    );
  });

  it('should apply secondary variant styles when specified', () => {
    const { getByTestId } = renderWithTheme(
      <Button title="Secondary" variant="secondary" testID="my-button" />,
    );
    const buttonElement = getByTestId('my-button');
    // ATUALIZADO: Testa a cor correta do tema.
    expect(buttonElement.props.style.backgroundColor).toEqual(
      theme.colors.secondary,
    );
  });

  it('should apply disabled styles when disabled', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Button title="Disabled" disabled testID="my-button" />,
    );
    const buttonElement = getByTestId('my-button');
    const textElement = getByText('Disabled');

    // Testa as cores do estado desabilitado.
    expect(buttonElement.props.style.backgroundColor).toEqual(
      theme.colors.ui.lightGray,
    );
    expect(textElement.props.style.color).toEqual(
      theme.colors.text.placeholder,
    );
  });

  it('should call onPress when pressed and not disabled', () => {
    const mockOnPress = jest.fn();
    renderWithTheme(<Button title="Clickable" onPress={mockOnPress} />);

    fireEvent.press(screen.getByText('Clickable'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('should not call onPress when disabled', () => {
    const mockOnPress = jest.fn();
    renderWithTheme(
      <Button title="Disabled" onPress={mockOnPress} disabled />,
    );

    fireEvent.press(screen.getByText('Disabled'));
    expect(mockOnPress).not.toHaveBeenCalled();
  });
});
