import { TouchableOpacityProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  testID?: string;
}
