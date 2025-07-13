import React from 'react';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import ScreenContainer from '../../components/ScreenContainer';
import { RootStackParamList } from '../../navigation/types';
import Button from '../../components/Button';
import MainTitle from '../../components/MainTitle';
import Header from '../../components/Header';
import { SuccessContainer, SuccessMessage, CardPreview, CardText } from './styles';

type SuccessScreenRouteProp = RouteProp<RootStackParamList, 'AddCardSuccess'>;
type SuccessScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddCardSuccess'>;

const AddCardSuccessScreen = () => {
  const navigation = useNavigation<SuccessScreenNavigationProp>();
  const route = useRoute<SuccessScreenRouteProp>();
  const { newCard } = route.params;

  const handleFinish = () => {
    navigation.navigate('CardList');
  };

  return (
    <ScreenContainer>
      <Header title="cadastro" />
      <SuccessContainer>
        <MainTitle style={{ marginBottom: 10 }}>Wallet Test</MainTitle>
        <SuccessMessage>Cartão cadastrado com sucesso!</SuccessMessage>
        <CardPreview>
          <CardText>Nome: {newCard.name}</CardText>
          <CardText>Número: **** **** **** {newCard.number.slice(-4)}</CardText>
          <CardText>Validade: {newCard.expiry}</CardText>
        </CardPreview>
        <Button title="Concluir" onPress={handleFinish} />
      </SuccessContainer>
    </ScreenContainer>
  );
};

export default AddCardSuccessScreen;
