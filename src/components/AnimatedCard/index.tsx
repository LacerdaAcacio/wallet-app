import React, { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
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
  isStackTop: boolean;
  onPress: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  card,
  index,
  isFocused,
  onPress,
  isStackTop,
}) => {
  const cardColor = index % 2 === 0 ? 'black' : 'green';

  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  useEffect(() => {
    translateY.value = withTiming(isFocused ? -hp('5%') : 0, { duration: 300 });
    scale.value = withTiming(isFocused ? 1.05 : 1, { duration: 300 });
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
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
