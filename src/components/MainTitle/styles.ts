import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const TitleText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${wp('10%')}px;
  text-align: center;
  margin-bottom: ${hp('5%')}px;
  font-weight: bold;
`;
