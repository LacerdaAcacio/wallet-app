import React from 'react';
import { ViewStyle, ImageSourcePropType } from 'react-native';
import { DefaultContainer, ImageContainer } from './styles';

interface ScreenContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  backgroundImage?: ImageSourcePropType;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, backgroundImage }) => {
  if (backgroundImage) {
    return (
      <ImageContainer source={backgroundImage} resizeMode="cover">
        {children}
      </ImageContainer>
    );
  }
  return <DefaultContainer>{children}</DefaultContainer>;
};

export default ScreenContainer;
