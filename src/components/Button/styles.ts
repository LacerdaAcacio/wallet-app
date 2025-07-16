import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ButtonVariant } from './types';

interface StyleProps {
  variant: ButtonVariant;
  disabled?: boolean;
}

export const StyledButton = styled.TouchableOpacity<StyleProps>`
  width: ${wp('85%')}px;
  max-width: 340px;
  height: ${hp('7%')}px;
  max-height: 60px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${hp('2.5%')}px;
  border-radius: ${({ theme }) =>
    theme.radii.medium};

  background-color: ${({ theme, variant, disabled }) => {
    if (disabled) {
      return theme.colors.ui.lightGray;
    }
    return variant === 'secondary' ? theme.colors.secondary : theme.colors.primary;
  }};
`;

export const ButtonText = styled.Text<StyleProps>`
  font-size: ${wp('4.5%')}px;

  color: ${({ theme, variant, disabled }) => {
    if (disabled) {
      return theme.colors.text.placeholder;
    }
    return variant === 'secondary' ? theme.colors.text.onSecondary : theme.colors.text.onPrimary;
  }};
`;
