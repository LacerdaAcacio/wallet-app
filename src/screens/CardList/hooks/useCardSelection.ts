import { useState, useMemo } from 'react';
import { Card } from '@/features/cards/types';

export const useCardSelection = (cards: Card[] | undefined) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardPress = (index: number) => {
    setSelectedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const resetSelection = () => setSelectedIndex(null);

  const focusedCard = useMemo(
    () => (selectedIndex !== null ? cards?.[selectedIndex] : null),
    [cards, selectedIndex],
  );

  const behindCard = useMemo(
    () =>
      selectedIndex !== null && cards && selectedIndex < cards.length - 1
        ? cards[selectedIndex + 1]
        : null,
    [cards, selectedIndex],
  );

  return {
    selectedIndex,
    focusedCard,
    behindCard,
    handleCardPress,
    resetSelection,
  };
};
