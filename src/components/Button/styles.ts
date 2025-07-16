import styled from 'styled-components/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  width: ${wp('85%')}px;
  max-width: 340px;
  height: ${hp('7%')}px;
  max-height: 60px;
  border-radius: ${({ theme }) => theme.radii.medium};
  justify-content: center;
  align-items: center;
  margin-bottom: ${hp('2.5%')}px;
  background-color: ${({ theme, variant, disabled }) => {
    if (disabled) {
      return '#EEEEEE';
    }
    return variant === 'secondary' ? theme.colors.secondaryButton : theme.colors.primaryButton;
  }};
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: ${wp('4.5%')}px;
  color: ${({ theme, variant, disabled }) => {
    if (disabled) {
      return '#BBBBBB';
    }
    return variant === 'secondary' ? theme.colors.textOnSecondary : theme.colors.textOnPrimary;
  }};
`;
