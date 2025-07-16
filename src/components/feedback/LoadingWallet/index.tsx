import React from 'react';
import { ScreenContainer } from '@/components/ScreenContainer';
import { WalletSvgIcon } from './assets/WalletSVGIcon';
import { usePulsingAnimation } from './hooks/usePulsingAnimation';
import * as S from './styles';

export const LoadingWallet = () => {
  const animatedStyle = usePulsingAnimation();
  const backgroundImage = require('@/assets/background.png');

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
