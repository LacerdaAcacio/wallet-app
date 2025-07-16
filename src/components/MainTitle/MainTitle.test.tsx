import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/styles/theme';
import { MainTitle } from './index';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Component: MainTitle', () => {
  it('should render the children text correctly', () => {
    const titleText = 'My Awesome Title';
    renderWithTheme(<MainTitle>{titleText}</MainTitle>);

    expect(screen.getByText(titleText)).toBeTruthy();
  });
});
