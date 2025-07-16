import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardFormState } from './types';

const initialState: CardFormState = {
  number: '',
  name: '',
  expiry: '',
  cvv: '',
};

const cardFormSlice = createSlice({
  name: 'cardForm',
  initialState,
  reducers: {
    updateField(
      state,
      action: PayloadAction<{ field: keyof CardFormState; value: string }>,
    ) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = cardFormSlice.actions;
export const cardFormReducer = cardFormSlice.reducer;
