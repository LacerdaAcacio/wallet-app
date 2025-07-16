import React from 'react';
import { DefaultContainer, ImageContainer } from './styles';
import { ScreenContainerProps } from './types';

const ScreenContainerComponent: React.FC<ScreenContainerProps> = ({
  children,
  backgroundImage,
}) => {
  if (backgroundImage) {
    return (
      <ImageContainer source={backgroundImage} resizeMode="cover">
        {children}
      </ImageContainer>
    );
  }
  return <DefaultContainer>{children}</DefaultContainer>;
};

export const ScreenContainer = React.memo(ScreenContainerComponent);
