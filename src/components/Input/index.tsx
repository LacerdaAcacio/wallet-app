import React from 'react';
import {
  InputContainer,
  Label,
  TextInputContainer,
  ErrorText,
  TextInputStyled,
} from './styles';
import { InputProps } from './types';

const InputComponent: React.FC<InputProps> = ({
  label,
  error,
  icon,
  ...rest
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <TextInputContainer>
        {icon}
        <TextInputStyled {...rest} />
      </TextInputContainer>
      {!!error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export const Input = React.memo(InputComponent);
