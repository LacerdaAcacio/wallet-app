import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export const useCardListAnimation = (isCardSelected: boolean) => {
  const listOpacity = useSharedValue(1);

  useFocusEffect(
    React.useCallback(() => {
      listOpacity.value = withTiming(isCardSelected ? 0 : 1, { duration: 300 });
    }, [isCardSelected, listOpacity]),
  );

  const listAnimatedStyle = useAnimatedStyle(() => ({
    opacity: listOpacity.value,
  }));

  return listAnimatedStyle;
};
