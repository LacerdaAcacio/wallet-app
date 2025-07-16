import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { Text, View } from 'react-native';
import { theme } from '@/styles/theme';
import { ScreenContainer } from './index';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Component: ScreenContainer', () => {
  it('renders children correctly in a default View container', () => {
    renderWithTheme(
      <ScreenContainer>
        <Text>Default Content</Text>
      </ScreenContainer>,
    );
    expect(screen.getByText('Default Content')).toBeTruthy();
  });

  it('renders children correctly in an ImageBackground container when backgroundImage is provided', () => {
    // Usamos um mock de imagem para o teste
    const mockImage = { uri: 'test-image' };

    renderWithTheme(
      <ScreenContainer backgroundImage={mockImage}>
        <Text>Image Content</Text>
      </ScreenContainer>,
    );
    expect(screen.getByText('Image Content')).toBeTruthy();

    // Verificamos se o componente renderizado tem a prop `source` da imagem
    const imageContainer = screen.getByTestId('ImageBackground.container'); // Test ID padrão do RNTL
    expect(imageContainer.props.source).toEqual(mockImage);
  });
});

// Adicionando um testID padrão para ImageBackground para facilitar o teste
jest.mock('react-native/Libraries/Image/ImageBackground', () => {
  const MockImageBackground = (props: any) => (
    <View {...props} testID="ImageBackground.container" />
  );
  return MockImageBackground;
});
