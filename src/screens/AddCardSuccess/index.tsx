import React from 'react';
import { ScreenContainer, Button, Header } from '@/components';
import { useAddCardSuccess } from './hooks/useAddCardSuccess';
import { UI_STRINGS } from '@/constants';
import * as S from './styles';

const AddCardSuccessScreen = () => {
  const { newCard, handleFinish } = useAddCardSuccess();
  const backgroundImage = require('@/assets/background.png');

  return (
    <ScreenContainer backgroundImage={backgroundImage}>
      <Header title={UI_STRINGS.addCardTitle} />
      <S.SuccessContainer>
        <S.AppTitle>{UI_STRINGS.appName}</S.AppTitle>
        <S.SuccessMessage>{UI_STRINGS.addCardSuccess}</S.SuccessMessage>

        <S.CardPreview>
          <S.CardText>
            {UI_STRINGS.cardPreviewName} {newCard.name}
          </S.CardText>
          <S.CardText>
            {UI_STRINGS.cardPreviewNumber} **** **** **** {newCard.number.slice(-4)}
          </S.CardText>
          <S.CardText>
            {UI_STRINGS.cardPreviewExpiry} {newCard.expiry}
          </S.CardText>
        </S.CardPreview>

        <Button title={UI_STRINGS.advanceButton} onPress={handleFinish} />
      </S.SuccessContainer>
    </ScreenContainer>
  );
};

export default AddCardSuccessScreen;
