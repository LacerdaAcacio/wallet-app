import React from 'react';
import { StyledButton, ButtonText } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
  testID?: string;
}

const Button: React.FC<CustomButtonProps> = ({ title, variant = 'primary', testID, ...rest }) => {
  return (
    <StyledButton variant={variant} testID={testID} {...rest}>
      <ButtonText variant={variant} {...rest}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

export default Button;
