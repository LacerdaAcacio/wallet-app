import React from 'react';
import { InputContainer, Label, TextInputContainer, ErrorText } from './styles';

interface InputWrapperProps {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const InputWrapper: React.FC<InputWrapperProps> = ({ label, error, icon, children }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <TextInputContainer>
        {icon}
        {children}
      </TextInputContainer>
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  );
};

export default InputWrapper;
