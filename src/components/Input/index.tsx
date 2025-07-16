import React from 'react';
import {
  InputContainer,
  Label,
  TextInputContainer,
  ErrorText,
  TextInputStyled,
  MaskedTextInputStyled,
} from './styles';
import { InputProps } from './types';

const InputComponent: React.FC<InputProps> = ({
  label,
  error,
  icon,
  mask,
  ...rest
}) => {
  const InputComponent = mask ? MaskedTextInputStyled : TextInputStyled;
  return (
    <InputContainer>
      <Label>{label}</Label>
      <TextInputContainer>
        {icon}
        <InputComponent mask={mask} {...rest} />
      </TextInputContainer>
      {!!error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export const Input = React.memo(InputComponent);
