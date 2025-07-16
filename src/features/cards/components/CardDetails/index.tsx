import React from 'react';
import {
  CardHolder,
  CardNumberContainer,
  CardNumberText,
  CardInfoRow,
  CardLabel,
} from './styles';
import { CardDetailsProps } from './types';

const UI_STRINGS = {
  CARD_NUMBER_MASK: '**** **** ****',
  EXPIRY_LABEL: 'Validade',
};

const CardDetails: React.FC<CardDetailsProps> = ({ card, variant }) => {
  return (
    <>
      <CardHolder variant={variant}>{card.name}</CardHolder>
      <CardNumberContainer>
        <CardNumberText variant={variant}>
          {UI_STRINGS.CARD_NUMBER_MASK} {card.number.slice(-4)}
        </CardNumberText>
      </CardNumberContainer>
      <CardInfoRow>
        <CardLabel variant={variant}>{UI_STRINGS.EXPIRY_LABEL}</CardLabel>
        <CardLabel variant={variant}>{card.expiry || '12/30'}</CardLabel>
      </CardInfoRow>
    </>
  );
};

export default React.memo(CardDetails);
