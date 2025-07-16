import styled, { css } from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const outerContainerStyles = css`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentView = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-horizontal: ${wp('4%')}px;
`;

export const DefaultContainer = styled.View`
  ${outerContainerStyles}
`;

export const ImageContainer = styled.ImageBackground`
  ${outerContainerStyles}
`;
