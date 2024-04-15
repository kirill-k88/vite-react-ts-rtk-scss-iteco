import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    filterReducer: filterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
