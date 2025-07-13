import { configureStore } from '@reduxjs/toolkit';
import cardFormReducer from '../features/cardForm/cardFormSlice';

export const store = configureStore({
  reducer: {
    cardForm: cardFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
