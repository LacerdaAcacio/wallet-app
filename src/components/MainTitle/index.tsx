import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MainTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${wp('7%')}px;
  text-align: center;
  margin-bottom: ${hp('5%')}px;
`;

export default MainTitle;
