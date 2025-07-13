import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  CardContainer,
  CardType,
  CardHolder,
  CardNumberContainer,
  CardNumberText,
  CardInfoRow,
  CardLabel,
  CardWrapper,
} from './styles';
import { Card } from '../../@types/card';

interface AnimatedCardProps {
  card: Card;
  index: number;
  isFocused: boolean;
  isBehind: boolean;
  isHidden: boolean;
  isStackTop: boolean;
  onPress: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  card,
  index,
  isFocused,
  isBehind,
  isHidden,
  isStackTop,
  onPress,
}) => {
  const cardColor = index % 2 === 0 ? 'black' : 'green';

  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animationConfig = {
    duration: 400,
    easing: Easing.bezier(0.33, 1, 0.68, 1),
  };

  useEffect(() => {
    if (isFocused) {
      // Anima para a posição de foco centralizada
      translateY.value = withTiming(-hp('28%'), animationConfig);
      scale.value = withTiming(1.1, animationConfig);
      opacity.value = withTiming(1, animationConfig);
    } else if (isBehind) {
      // Anima para a parte de baixo, semi-visível e transparente
      translateY.value = withTiming(hp('45%'), animationConfig);
      scale.value = withTiming(0.9, animationConfig);
      opacity.value = withTiming(0.5, animationConfig);
    } else if (isHidden) {
      // Anima para fora da tela
      translateY.value = withTiming(hp('100%'), animationConfig);
      opacity.value = withTiming(0, animationConfig);
    } else {
      // Retorna para a posição padrão na pilha
      translateY.value = withTiming(0, animationConfig);
      scale.value = withTiming(1, animationConfig);
      opacity.value = withTiming(1, animationConfig);
    }
  }, [isFocused, isBehind, isHidden]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
      opacity: opacity.value,
      zIndex: isFocused ? 10 : 0,
    };
  });

  return (
    <CardWrapper>
      <Animated.View style={animatedStyle}>
        <Pressable onPress={onPress}>
          <CardContainer variant={cardColor}>
            <CardType variant={cardColor}>
              {cardColor === 'black' ? 'Black Card' : 'Green Card'}
            </CardType>
            {(isFocused || isStackTop) && (
              <>
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
              </>
            )}
          </CardContainer>
        </Pressable>
      </Animated.View>
    </CardWrapper>
  );
};

export default AnimatedCard;
