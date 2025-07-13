import React, { useState } from 'react';
import { View, ActivityIndicator, FlatList, Pressable, Alert } from 'react-native';
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
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

type CardListNavigationProp = StackNavigationProp<RootStackParamList, 'CardList'>;

const CardListScreen = () => {
  const navigation = useNavigation<CardListNavigationProp>();
  const { cards, isLoadingCards } = useCards();
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleAddPress = () => {
    navigation.navigate('AddCard');
  };

  const handleCardPress = (index: number) => {
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
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
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color={theme.colors.primaryButton} />
        </Pressable>
        <HeaderTitle>Meus Cartões</HeaderTitle>
        <AddButton onPress={handleAddPress}>
          <Ionicons name="add-circle-outline" size={30} color={theme.colors.primaryButton} />
        </AddButton>
      </HeaderWrapper>

      <FlatList
        data={cards}
        renderItem={({ item, index }) => (
          <AnimatedCard
            card={item}
            index={index}
            isStackTop={index === cards.length - 1}
            isFocused={selectedIndex === index}
            onPress={() => handleCardPress(index)}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          alignItems: 'center',
          paddingTop: 20,
          paddingBottom: hp('20%'),
        }}
      />

      <BottomButtonContainer>
        {selectedIndex !== null ? (
          <Button
            title="Pagar com este cartão"
            onPress={() => Alert.alert('Ação', 'Botão de pagamento clicado!')}
          />
        ) : (
          <ActionText>Selecione um cartão</ActionText>
        )}
      </BottomButtonContainer>
    </CardListContainer>
  );
};

export default CardListScreen;
