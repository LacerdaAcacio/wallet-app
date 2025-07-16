import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

const shadowStyles = {
  elevation: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
};
interface SectionProps {
  variant: 'default' | 'wallet';
}

export const Container = styled.View`
  background-color: transparent;
`;

export const TopSection = styled.View.attrs<SectionProps>(props => ({
  style: props.variant === 'wallet' ? shadowStyles : {},
}))<SectionProps>`
  background-color: ${({ theme, variant }) =>
    variant === 'wallet' ? theme.colors.lightGray : 'transparent'};

  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${hp('2%')}px;
  padding-horizontal: ${wp('5%')}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;
interface HeaderTitleProps {
  variant: 'default' | 'wallet';
}

export const HeaderTitle = styled.Text<HeaderTitleProps>`
  flex: 1;
  font-size: ${wp('7.5%')}px;
  text-align: center;

  color: ${({ theme, variant }) => {
    return variant === 'wallet' ? theme.colors.backgroundDark : theme.colors.primaryButton;
  }};
`;

export const BackButton = styled.TouchableOpacity`
  padding: ${wp('2%')}px;
`;

export const HeaderPlaceholder = styled.View`
  width: ${wp('3%')}px;
`;

export const SubHeaderSection = styled.View`
  width: 100%;
  padding-vertical: 20px;
  padding-horizontal: ${wp('5%')}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  margin-top: -30px;
  padding-top: 40px;
`;

export const SubHeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  color: ${({ theme }) => theme.colors.primaryButton};
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  right: ${wp('5%')}px;
  padding: 8px;
`;
