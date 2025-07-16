import React, { useEffect } from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';
import * as S from './styles';
import ScreenContainer from '../../../components/ScreenContainer';
import { WalletSvgIcon } from './assets/WalletSVGIcon';

export const LoadingWallet = () => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const backgroundImage = require('../../../assets/background.png');

  useEffect(() => {
    const animationDuration = 1500;
    const easing = Easing.bezier(0.42, 0, 0.58, 1);

    scale.value = withRepeat(withTiming(1.2, { duration: animationDuration, easing }), -1, true);
    opacity.value = withRepeat(withTiming(0.6, { duration: animationDuration, easing }), -1, true);
  }, [opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <ScreenContainer backgroundImage={backgroundImage}>
      <S.Container>
        <S.AnimatedIconContainer style={animatedStyle}>
          <WalletSvgIcon />
        </S.AnimatedIconContainer>
      </S.Container>
    </ScreenContainer>
  );
};
