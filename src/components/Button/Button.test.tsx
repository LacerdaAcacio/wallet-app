import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../../styles/theme';
import Button from './index';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Component: Button', () => {
  it('should apply secondary variant styles when specified', () => {
    const { getByTestId, getByText } = renderWithTheme(
      <Button title="Secondary" variant="secondary" testID="my-button" />,
    );
    const buttonElement = getByTestId('my-button');
    expect(buttonElement).toHaveStyle({
      backgroundColor: theme.colors.secondaryButton,
    });
    const textElement = getByText('Secondary');
    expect(textElement).toHaveStyle({
      color: theme.colors.textOnSecondary,
    });
  });
});
