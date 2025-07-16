import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { HeaderStyleProps } from './types';

export const Container = styled.View<{ paddingTop: number }>`
  background-color: transparent;
  padding-top: ${({ paddingTop }) => paddingTop}px;
`;

export const TopSection = styled.View.attrs<HeaderStyleProps>(({ theme, variant }) => ({
  ...(variant === 'wallet' && {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  }),
}))<HeaderStyleProps>`
  background-color: ${({ theme, variant }) =>
    variant === 'wallet' ? theme.colors.ui.lightGray : 'transparent'};

  padding-bottom: ${hp('2%')}px;
  padding-horizontal: ${wp('5%')}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

export const HeaderTitle = styled.Text<HeaderStyleProps>`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: ${wp('7.5%')}px;
  color: ${({ theme, variant }) =>
    variant === 'wallet' ? theme.colors.background : theme.colors.primary};
`;

export const BackButton = styled.TouchableOpacity`
  padding: ${wp('2%')}px;
`;

export const HeaderPlaceholder = styled.View`
  width: ${wp('10%')}px;
`;

export const SubHeaderSection = styled.View`
  width: 100%;
  padding-vertical: ${({ theme }) => theme.spacing.medium}px;
  padding-horizontal: ${wp('5%')}px;
  background-color: ${({ theme }) => theme.colors.ui.lightGray};
  border-bottom-left-radius: ${({ theme }) =>
    theme.radii.extraLarge};
  border-bottom-right-radius: ${({ theme }) =>
    theme.radii.extraLarge};
  margin-top: -${({ theme }) => theme.radii.extraLarge};
  padding-top: 40px;
`;

export const SubHeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.h3}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
