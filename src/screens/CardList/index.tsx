import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Alert } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useCards } from '../../hooks/useCards';
import AnimatedCard from '../../components/AnimatedCard';
import {
  CardListContainer,
  HeaderWrapper,
  HeaderTitle,
  AddButton,
  ActionText,
  BottomButtonContainer,
  ContentContainer,
  ListWrapper,
  OverlayContainer,
} from './styles';
import { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
import Button from '../../components/Button';

type CardListNavigationProp = StackNavigationProp<RootStackParamList, 'CardList'>;

const CardListScreen = () => {
  const navigation = useNavigation<CardListNavigationProp>();
  const { cards, isLoadingCards } = useCards();
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const listOpacity = useSharedValue(1);

  const handleAddPress = () => navigation.navigate('AddCard');
  const handleCardPress = (index: number) =>
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
  const resetSelection = () => setSelectedIndex(null);

  const handleUseThisCardPress = () => {
    if (cards && cards.length > 0) {
      setSelectedIndex(cards.length - 1);
    }
  };

  const listAnimatedStyle = useAnimatedStyle(() => ({
    opacity: listOpacity.value,
  }));

  useFocusEffect(
    React.useCallback(() => {
      listOpacity.value = withTiming(selectedIndex !== null ? 0 : 1);
    }, [selectedIndex]),
  );

  const focusedCard = selectedIndex !== null ? cards?.[selectedIndex] : null;
  const behindCard =
    selectedIndex !== null && cards && selectedIndex < cards.length - 1
      ? cards[selectedIndex + 1]
      : null;

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

      <ContentContainer>
        <Animated.View style={[{ width: '100%', flex: 1 }, listAnimatedStyle]}>
          <ListWrapper>
            <FlatList
              data={cards}
              renderItem={({ item, index }) => (
                <AnimatedCard
                  card={item}
                  index={index}
                  isStackTop={index === (cards?.length ?? 0) - 1}
                  onPress={() => handleCardPress(index)}
                  isAnyCardSelected={selectedIndex !== null}
                />
              )}
              keyExtractor={item => item.id}
              contentContainerStyle={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}
            />
          </ListWrapper>
        </Animated.View>

        {selectedIndex !== null && focusedCard && (
          <OverlayContainer>
            {behindCard && (
              <AnimatedCard
                card={behindCard}
                index={selectedIndex + 1}
                isBehind={true}
                onPress={resetSelection}
              />
            )}
            <AnimatedCard
              card={focusedCard}
              index={selectedIndex}
              isFocused={true}
              onPress={resetSelection}
            />
          </OverlayContainer>
        )}
      </ContentContainer>

      <BottomButtonContainer>
        {selectedIndex !== null ? (
          <Button
            title="Pagar com este cartão"
            onPress={() => Alert.alert('Ação', 'Botão de pagamento clicado!')}
          />
        ) : (
          <Pressable onPress={handleUseThisCardPress}>
            <ActionText>usar este cartão</ActionText>
          </Pressable>
        )}
      </BottomButtonContainer>
    </CardListContainer>
  );
};

export default CardListScreen;
