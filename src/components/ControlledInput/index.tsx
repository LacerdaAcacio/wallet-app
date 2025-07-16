import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '@/components/Input';
import { ControlledInputProps } from './types';

export const ControlledInput: React.FC<ControlledInputProps> = ({
  control,
  name,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <Input
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          error={error?.message}
          {...rest}
        />
      )}
    />
  );
};
