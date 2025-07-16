import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AppProviders } from '@/providers';
import { AppNavigator } from '@/navigation';

const App = () => {
  return (
    <AppProviders>
      <NavigationContainer>
        <StatusBar style="light" translucent />
        <AppNavigator />
      </NavigationContainer>
    </AppProviders>
  );
};

export default App;
