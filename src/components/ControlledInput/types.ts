import { Control } from 'react-hook-form';
import { InputProps } from '@/components/Input/types';

export interface ControlledInputProps extends InputProps {
  control: Control<any>;
  name: string;
}
