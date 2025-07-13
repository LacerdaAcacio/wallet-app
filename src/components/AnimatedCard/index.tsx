import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import {
  CardContainer,
  CardType,
  CardHolder,
  CardNumberContainer,
  CardNumberText,
  CardInfoRow,
  CardLabel,
} from './styles';
import { Card } from '../../@types/card';

interface AnimatedCardProps {
  card: Card;
  index: number;
  totalCards: number;
  selectedCardId: string | null;
  onPress: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  card,
  index,
  totalCards,
  selectedCardId,
  onPress,
}) => {
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const isSelected = selectedCardId === card.id;
  const isUnselected = selectedCardId !== null && !isSelected;

  useEffect(() => {
    if (isSelected) {
      translateY.value = withTiming(-(index * 40));
      scale.value = withTiming(1.1, { duration: 250 });
      opacity.value = withTiming(1);
    } else if (isUnselected) {
      translateY.value = withTiming(totalCards * 60);
      scale.value = withTiming(0.9);
      opacity.value = withTiming(0.5);
    } else {
      translateY.value = withTiming(-(index * (180 - 40)));
      scale.value = withTiming(1 - index * 0.05);
      opacity.value = withTiming(1);
    }
  }, [selectedCardId, card.id, index, totalCards]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      zIndex: totalCards - index,
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
    };
  });

  const cardColor = index % 2 === 0 ? 'black' : 'green';

  return (
    <Animated.View style={animatedStyle}>
      <Pressable onPress={onPress}>
        <CardContainer variant={cardColor}>
          <CardType variant={cardColor}>
            {cardColor === 'black' ? 'Black Card' : 'Green Card'}
          </CardType>
          <CardHolder variant={cardColor}>{card.name}</CardHolder>
          <CardNumberContainer>
            <CardNumberText variant={cardColor}>
              **** **** **** {card.number.slice(-4)}
            </CardNumberText>
          </CardNumberContainer>
          <CardInfoRow>
            <CardLabel variant={cardColor}>Validade</CardLabel>
            <CardLabel variant={cardColor}>{card.expiry}</CardLabel>
          </CardInfoRow>
        </CardContainer>
      </Pressable>
    </Animated.View>
  );
};

export default AnimatedCard;
