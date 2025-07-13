import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const CardListContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight() + 20}px;
  padding-bottom: 20px;
  padding-horizontal: ${wp('5%')}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.primaryButton};
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity``;

export const ActionText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const BottomButtonContainer = styled.View`
  height: ${hp('15%')}px;
  justify-content: center;
  align-items: center;
`;
