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
  isAnyCardSelected: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  card,
  index,
  isFocused,
  isBehind,
  isHidden,
  isStackTop,
  onPress,
  isAnyCardSelected,
}) => {
  const cardColor = index % 2 === 0 ? 'black' : 'green';

  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animationConfig = {
    duration: 400,
    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  };

  useEffect(() => {
    let targetY = 0;
    let targetScale = 1;
    let targetOpacity = 1;

    if (isFocused) {
      targetY = -hp('-15%');
    } else if (isBehind) {
      targetY = hp('65%');
      targetOpacity = 0.5;
    } else if (isHidden) {
      targetY = hp('100%');
      targetOpacity = 0;
    }

    translateY.value = withTiming(targetY, animationConfig);
    scale.value = withTiming(targetScale, animationConfig);
    opacity.value = withTiming(targetOpacity, animationConfig);
  }, [isFocused, isBehind, isHidden]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: isAnyCardSelected ? 'absolute' : 'relative',
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
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
            {(isFocused || (isStackTop && !isAnyCardSelected)) && (
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
