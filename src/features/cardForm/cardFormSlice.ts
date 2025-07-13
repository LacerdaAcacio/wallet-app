import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardFormState {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

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
    updateField(state, action: PayloadAction<{ field: keyof CardFormState; value: string }>) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = cardFormSlice.actions;
export default cardFormSlice.reducer;
