import React, { useMemo } from 'react';
import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { CardVariant } from '@/features/cards/types';
import CardDetails from '../CardDetails';
import { UI } from './constants';
import { CardContainer, CardType, CardWrapper } from './styles';
import { AnimatedCardProps } from './types';
import { useCardAnimation } from './useCardAnimation';

const AnimatedCardComponent: React.FC<AnimatedCardProps> = ({
  card,
  index,
  isFocused = false,
  isBehind = false,
  isStackTop = false,
  isAnyCardSelected = false,
  onPress,
}) => {
  const animatedStyle = useCardAnimation({ isFocused, isBehind });

  const variant: CardVariant = useMemo(
    () => (index % 2 === 0 ? 'black' : 'green'),
    [index],
  );

  const shouldShowDetails = useMemo(
    () => isFocused || (isStackTop && !isAnyCardSelected),
    [isFocused, isStackTop, isAnyCardSelected],
  );

  const cardTypeText =
    variant === 'black' ? UI.CARD_TYPE_BLACK : UI.CARD_TYPE_GREEN;

  return (
    <CardWrapper>
      <Animated.View style={animatedStyle}>
        <Pressable onPress={onPress}>
          <CardContainer variant={variant}>
            <CardType variant={variant}>{cardTypeText}</CardType>
            {shouldShowDetails && <CardDetails card={card} variant={variant} />}
          </CardContainer>
        </Pressable>
      </Animated.View>
    </CardWrapper>
  );
};

export const AnimatedCard = React.memo(AnimatedCardComponent);
