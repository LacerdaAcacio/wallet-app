import styled, { css } from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const containerStyles = css`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  padding: 0 ${wp('4%')}px;
  width: 100%;
`;

export const DefaultContainer = styled.View`
  ${containerStyles}
`;

export const ImageContainer = styled.ImageBackground`
  ${containerStyles}
`;
