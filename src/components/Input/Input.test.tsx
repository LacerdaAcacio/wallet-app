import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/styles/theme';
import { Input } from './index';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Component: Input', () => {
  it('renders the label correctly', () => {
    renderWithTheme(<Input label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeTruthy();
  });

  it('displays the value passed to it', () => {
    renderWithTheme(<Input label="Test" value="Test Value" />);
    expect(screen.getByDisplayValue('Test Value')).toBeTruthy();
  });

  it('calls onChangeText when text is changed', () => {
    const mockOnChangeText = jest.fn();
    renderWithTheme(
      <Input label="Test" onChangeText={mockOnChangeText} testID="my-input" />,
    );

    const inputElement = screen.getByTestId('my-input');
    fireEvent.changeText(inputElement, 'new text');
    expect(mockOnChangeText).toHaveBeenCalledWith('new text');
  });

  it('displays an error message when the error prop is provided', () => {
    renderWithTheme(<Input label="Test" error="Invalid input" />);
    expect(screen.getByText('Invalid input')).toBeTruthy();
  });

  it('does not display an error message when the error prop is absent', () => {
    renderWithTheme(<Input label="Test" />);
    expect(screen.queryByText('Invalid input')).toBeNull();
  });
});
