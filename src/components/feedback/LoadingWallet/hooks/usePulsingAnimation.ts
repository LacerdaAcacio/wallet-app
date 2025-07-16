import { useEffect } from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

const ANIMATION_DURATION = 1500;
const EASING = Easing.bezier(0.42, 0, 0.58, 1);

export const usePulsingAnimation = () => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.2, { duration: ANIMATION_DURATION, easing: EASING }),
      -1,
      true,
    );
    opacity.value = withRepeat(
      withTiming(0.6, { duration: ANIMATION_DURATION, easing: EASING }),
      -1,
      true,
    );
  }, [opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return animatedStyle;
};
