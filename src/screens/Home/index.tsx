import React from 'react';
import ScreenContainer from '../../components/ScreenContainer';
import MainTitle from '../../components/MainTitle';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const backgroundImage = require('../../assets/background.png');

  return (
    <ScreenContainer backgroundImage={backgroundImage}>
      <MainTitle>Wallet Test</MainTitle>
      <Button title="meus cartões" onPress={() => navigation.navigate('CardList')} />
      <Button
        title="cadastrar cartão"
        testID="sd"
        variant="secondary"
        onPress={() => navigation.navigate('AddCard')}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
