import React from 'react';
import { ScreenContainer, MainTitle, Button } from '@/components';
import { useHome } from './hooks/useHome';
import { UI_STRINGS } from '@/constants';

const HomeScreen = () => {
  const { handleNavigateToCardList, handleNavigateToAddCard } = useHome();
  const backgroundImage = require('@/assets/background.png');

  return (
    <ScreenContainer backgroundImage={backgroundImage}>
      <MainTitle>{UI_STRINGS.appName}</MainTitle>
      <Button
        title={UI_STRINGS.myCardsButton}
        onPress={handleNavigateToCardList}
      />
      <Button
        title={UI_STRINGS.addCardTitle}
        variant="secondary"
        onPress={handleNavigateToAddCard}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;
