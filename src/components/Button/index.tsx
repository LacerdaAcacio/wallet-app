import React from 'react';
import { StyledButton, ButtonText } from './styles';
import { ButtonProps } from './types';

const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  testID,
  ...rest
}) => {
  return (
    <StyledButton variant={variant} testID={testID} {...rest}>
      <ButtonText variant={variant} disabled={rest.disabled}>
        {title}
      </ButtonText>
    </StyledButton>
  );
};

export const Button = React.memo(ButtonComponent);
