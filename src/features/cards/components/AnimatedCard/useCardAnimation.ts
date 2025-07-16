import { useEffect } from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ANIMATION_CONFIG } from './constants';

interface UseCardAnimationProps {
  isFocused: boolean;
  isBehind: boolean;
}

export const useCardAnimation = ({
  isFocused,
  isBehind,
}: UseCardAnimationProps) => {
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  useEffect(() => {
    let targetY = 0;
    let targetScale = 1;
    let targetOpacity = 1;

    if (isFocused) {
      targetY = -hp('10%');
    } else if (isBehind) {
      targetY = hp('35%');
      targetOpacity = 0.5;
    }

    translateY.value = withTiming(targetY, ANIMATION_CONFIG);
    scale.value = withTiming(targetScale, ANIMATION_CONFIG);
    opacity.value = withTiming(targetOpacity, ANIMATION_CONFIG);
  }, [isFocused, isBehind, translateY, scale, opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      position: isFocused || isBehind ? 'absolute' : 'relative',
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
      opacity: opacity.value,
      zIndex: isFocused ? 10 : 0,
    };
  }, [isFocused, isBehind]);

  return animatedStyle;
};
