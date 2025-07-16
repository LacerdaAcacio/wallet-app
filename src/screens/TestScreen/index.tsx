// screens/TestScreen.tsx

import React from 'react';
import { View } from 'react-native';
import Header from '../../components/Header'; // Importe seu Header

const TestScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#CCCCCC' }}>
      <Header title="Teste de Sombra" withShadow={true} />
    </View>
  );
};

export default TestScreen;
