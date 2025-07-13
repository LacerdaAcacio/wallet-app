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

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  max-height: 55%;
`;

export const ListWrapper = styled.View`
  width: 100%;
  flex: 1;
`;

export const ActionText = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const BottomButtonContainer = styled.View`
  width: 100%;
  padding-vertical: ${hp('3%')}px;
  align-items: center;
`;

export const OverlayContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;
