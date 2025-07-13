import React from 'react';
import { Pressable, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  CardContainer,
  CardType,
  CardHolder,
  CardNumberContainer,
  CardNumberText,
  CardInfoRow,
  CardLabel,
} from './styles';
import { Card } from '../../@types/card';

interface AnimatedCardProps {
  card: Card;
  index: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ card, index }) => {
  const cardColor = index % 2 === 0 ? 'black' : 'green';

  return (
    <View style={{ marginBottom: -hp('20%') }}>
      <Pressable>
        <CardContainer variant={cardColor}>
          <CardType variant={cardColor}>
            {cardColor === 'black' ? 'Black Card' : 'Green Card'}
          </CardType>
          <CardHolder variant={cardColor}>{card.name}</CardHolder>
          <CardNumberContainer>
            <CardNumberText variant={cardColor}>
              **** **** **** {card.number.slice(-4)}
            </CardNumberText>
          </CardNumberContainer>
          <CardInfoRow>
            <CardLabel variant={cardColor}>Validade</CardLabel>
            <CardLabel variant={cardColor}>{card.expiry}</CardLabel>
          </CardInfoRow>
        </CardContainer>
      </Pressable>
    </View>
  );
};

export default AnimatedCard;
