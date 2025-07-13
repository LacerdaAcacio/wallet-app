import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './styles/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation';
import { StatusBar } from 'expo-status-bar';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <StatusBar style="light" />
            <AppNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}
