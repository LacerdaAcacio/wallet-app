import React from 'react';
import { FlatList, Pressable, Alert, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Button, Header, LoadingWallet } from '@/components';
import { useCards } from '@/features/cards/hooks/useCards';
import { AnimatedCard } from '@/features/cards/components/AnimatedCard';
import { SCREENS } from '@/navigation';
import { UI_STRINGS } from '@/constants';

import { useCardSelection } from './hooks/useCardSelection';
import { useCardListAnimation } from './hooks/useCardListAnimation';
import * as S from './styles';

const AddCardButton = React.memo(() => {
  const navigation = useNavigation();
  const theme = useTheme();
  const handleAddPress = () => navigation.navigate(SCREENS.ADD_CARD);
  return (
    <Pressable onPress={handleAddPress} hitSlop={10}>
      <Ionicons name="add" size={30} color={theme.colors.primary} />
    </Pressable>
  );
});

const CardListScreen = () => {
  const { cards, isLoadingCards } = useCards();
  const {
    selectedIndex,
    focusedCard,
    behindCard,
    handleCardPress,
    resetSelection,
  } = useCardSelection(cards);

  const listAnimatedStyle = useCardListAnimation(selectedIndex !== null);

  if (isLoadingCards) {
    return <LoadingWallet />;
  }

  const ListFooter = () => <View style={{ height: 120 }} />;

  return (
    <S.Container>
      <Header
        title={UI_STRINGS.appName}
        variant="wallet"
        rightComponent={<AddCardButton />}
      />

      <S.ContentContainer>
        <Animated.View style={[{ width: '100%', flex: 1 }, listAnimatedStyle]}>
          <S.ListWrapper>
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
              contentContainerStyle={{ alignItems: 'center', paddingTop: 20 }}
              ListFooterComponent={ListFooter}
            />
          </S.ListWrapper>
        </Animated.View>

        {selectedIndex !== null && focusedCard && (
          <S.OverlayContainer>
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
          </S.OverlayContainer>
        )}
      </S.ContentContainer>

      <S.ActionContainer>
        {selectedIndex !== null ? (
          <Button
            title={UI_STRINGS.payWithCardButton}
            onPress={() => Alert.alert(UI_STRINGS.action, UI_STRINGS.paymentButtonClicked)}
          />
        ) : (
          <Pressable onPress={() => handleCardPress((cards?.length ?? 1) - 1)}>
            <S.ActionText>{UI_STRINGS.useThisCardText}</S.ActionText>
          </Pressable>
        )}
      </S.ActionContainer>

      <S.PeekCard>
        {cards && cards.length > 0 && (
          <AnimatedCard card={cards[0]} index={0} isAnyCardSelected={true} />
        )}
      </S.PeekCard>
    </S.Container>
  );
};

export default CardListScreen;
