import React from 'react';
import { DefaultContainer, ImageContainer, ContentView } from './styles';
import { ScreenContainerProps } from './types';

const ScreenContainerComponent: React.FC<ScreenContainerProps> = ({
  children,
  backgroundImage,
}) => {
  if (backgroundImage) {
    return (
      <ImageContainer source={backgroundImage} resizeMode="cover">
        <ContentView>{children}</ContentView>
      </ImageContainer>
    );
  }
  return (
    <DefaultContainer>
      <ContentView>{children}</ContentView>
    </DefaultContainer>
  );
};

export const ScreenContainer = React.memo(ScreenContainerComponent);
