import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface CardStyleProps {
  variant?: 'black' | 'green';
}

export const CardWrapper = styled.View`
  margin-bottom: -${hp('20%')}px;
  align-items: center;
  width: 100%;
`;

export const CardContainer = styled.View<CardStyleProps>`
  width: ${wp('85%')}px;
  height: ${hp('25%')}px;
  background-color: ${({ theme, variant }) =>
    variant === 'black' ? theme.colors.black : theme.colors.secondaryButton};
  border-radius: ${({ theme }) => theme.radii.large};
  padding: ${wp('5%')}px;
  justify-content: space-between;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
`;

const BaseText = styled.Text<CardStyleProps>`
  color: ${({ theme, variant }) =>
    variant === 'black' ? theme.colors.white : theme.colors.textOnSecondary};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const CardType = styled(BaseText)`
  font-size: ${({ theme }) => theme.fontSizes.h5};
  font-weight: bold;
`;

export const CardHolder = styled(BaseText)`
  font-size: ${({ theme }) => theme.fontSizes.body};
  margin-top: ${hp('2%')}px;
`;

export const CardNumberContainer = styled.View`
  margin-top: ${hp('1%')}px;
`;

export const CardNumberText = styled(BaseText)`
  font-size: ${({ theme }) => theme.fontSizes.body};
  letter-spacing: 2px;
`;

export const CardInfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${hp('2%')}px;
`;

export const CardLabel = styled(BaseText)`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
