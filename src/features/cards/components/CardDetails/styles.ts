import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CardVariant } from '@/features/cards/types';

interface CardStyleProps {
  variant: CardVariant;
}

const BaseText = styled.Text<CardStyleProps>`
  color: ${({ theme, variant }) =>
    variant === 'black'
      ? theme.colors.white
      : theme.colors.text.onSecondary};
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const CardHolder = styled(BaseText)`
  font-size: ${({ theme }) => theme.fontSizes.body}px;
  margin-top: ${hp('2%')}px;
`;

export const CardNumberContainer = styled.View`
  margin-top: ${hp('1%')}px;
`;

export const CardNumberText = styled(BaseText)`
  font-size: ${({ theme }) => theme.fontSizes.body}px;
  letter-spacing: 2px;
`;

export const CardInfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${hp('2%')}px;
`;

export const CardLabel = styled(BaseText)`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
`;
