import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { CardVariant } from '@/features/cards/types';

interface CardStyleProps {
  variant: CardVariant;
}

export const CardWrapper = styled.View`
  margin-bottom: -${hp('20%')};
  align-items: center;
  width: 100%;
`;

export const CardContainer = styled.View.attrs<CardStyleProps>(({ theme }) => ({
  shadowColor: theme.colors.black,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
  elevation: 5,
}))<CardStyleProps>`
  width: ${wp('85%')}px;
  height: ${hp('25%')}px;
  background-color: ${({ theme, variant }) =>
    variant === 'black' ? theme.colors.black : theme.colors.secondary};
  border-radius: ${({ theme }) => theme.radii.large};
  padding: ${wp('5%')}px;
  justify-content: space-between;
`;

export const CardType = styled.Text<CardStyleProps>`
  color: ${({ theme, variant }) =>
    variant === 'black'
      ? theme.colors.white
      : theme.colors.text.onSecondary};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.h5}px;
  font-weight: bold;
`;
