import React, { useState } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { useCards } from '../../hooks/useCards';
import AnimatedCard from '../../components/AnimatedCard';
import {
  CardListContainer,
  HeaderWrapper,
  HeaderTitle,
  AddButton,
  ActionText,
  BottomButtonContainer,
} from './styles';
import { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import Button from '../../components/Button';

type CardListNavigationProp = StackNavigationProp<RootStackParamList, 'CardList'>;

const CardListScreen = () => {
  const navigation = useNavigation<CardListNavigationProp>();
  const { cards, isLoadingCards } = useCards();
  const theme = useTheme();
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleAddPress = () => {
    navigation.navigate('AddCard');
  };

  if (isLoadingCards) {
    return (
      <CardListContainer style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.colors.primaryButton} />
      </CardListContainer>
    );
  }

  return (
    <CardListContainer>
      <HeaderWrapper>
        <View style={{ width: 30 }} />
        <HeaderTitle>Meus Cartões</HeaderTitle>
        <AddButton onPress={handleAddPress}>
          <Ionicons name="add-circle-outline" size={30} color={theme.colors.primaryButton} />
        </AddButton>
      </HeaderWrapper>

      <FlatList
        data={cards}
        renderItem={({ item, index }) => <AnimatedCard card={item} index={index} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 20,
          paddingBottom: 20,
        }}
      />

      <BottomButtonContainer>
        {selectedCardId ? (
          <Button title="Pagar com este cartão" onPress={() => {}} />
        ) : (
          <ActionText>Selecione um cartão</ActionText>
        )}
      </BottomButtonContainer>
    </CardListContainer>
  );
};

export default CardListScreen;
