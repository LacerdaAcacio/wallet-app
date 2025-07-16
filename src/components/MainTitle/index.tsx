import React from 'react';
import { TitleText } from './styles';
import { MainTitleProps } from './types';

const MainTitleComponent: React.FC<MainTitleProps> = ({ children, ...rest }) => {
  return <TitleText {...rest}>{children}</TitleText>;
};

export const MainTitle = React.memo(MainTitleComponent);
