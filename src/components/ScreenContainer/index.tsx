import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  justify-content: center;
  align-items: center;
  padding: 0 ${wp('4%')}px;
`;

export default ScreenContainer;
