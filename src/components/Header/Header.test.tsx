import React from 'react';
import { Text, View } from 'react-native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '@/styles/theme';
import { Header } from './index';
import { UI } from './constants';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    goBack: mockGoBack,
  }),
}));

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Component: Header', () => {
  beforeEach(() => {
    mockGoBack.mockClear();
  });

  it('renders the title correctly', () => {
    renderWithTheme(<Header title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeTruthy();
  });

  it('calls navigation.goBack when back button is pressed', () => {
    renderWithTheme(<Header title="Test" />);
    const backButton = screen.getByTestId('icon-mock-arrow-back'); // Expo-vector-icons mock testID
    fireEvent.press(backButton);
    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });

  it('does not render sub-header for default variant', () => {
    renderWithTheme(<Header title="Test" />);
    expect(screen.queryByText(UI.SUB_HEADER_TITLE)).toBeNull();
  });

  it('renders sub-header for wallet variant', () => {
    renderWithTheme(<Header title="Test" variant="wallet" />);
    expect(screen.getByText(UI.SUB_HEADER_TITLE)).toBeTruthy();
  });

  it('renders the rightComponent when provided', () => {
    const RightComponent = () => (
      <View>
        <Text>Right Side</Text>
      </View>
    );
    renderWithTheme(<Header title="Test" rightComponent={<RightComponent />} />);
    expect(screen.getByText('Right Side')).toBeTruthy();
  });
});
