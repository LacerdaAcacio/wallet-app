import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const ImageContainer = styled.ImageBackground`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  justify-content: center;
  align-items: center;
  padding: 0 ${wp('4%')}px;
  width: '100%';
`;

export const DefaultContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  justify-content: center;
  align-items: center;
  padding: 0 ${wp('4%')}px;
  width: '100%';
`;
