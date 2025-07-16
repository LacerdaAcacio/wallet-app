import { Card } from '@/features/cards/types';

export interface AnimatedCardProps {
  card: Card;
  index: number;
  isFocused?: boolean;
  isBehind?: boolean;
  isStackTop?: boolean;
  isAnyCardSelected?: boolean;
  onPress?: () => void;
}
