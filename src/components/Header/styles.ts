import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const HeaderContainer = styled.View`
  width: ${wp('100%')}px;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${hp('2%')}px;
  padding-horizontal: ${wp('5%')}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.primaryButton};
  font-size: ${wp('5.5%')}px;
  left: 0;
  right: 0;
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  padding: ${wp('2%')}px;
`;

export const HeaderPlaceholder = styled.View`
  width: ${wp('7%')}px;
`;
