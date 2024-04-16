import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export enum viewStyles {
  'list' = 'list',
  'grid' = 'grid'
}

export interface IviewStyleSlice {
  style: viewStyles;
}

const initialState: IviewStyleSlice = {
  style: viewStyles.list
};

export const viewStyleSlice = createSlice({
  name: 'viewStyle',
  initialState,
  reducers: {
    setStyle: (state, action: PayloadAction<IviewStyleSlice>) => {
      state.style = action.payload.style;
    }
  }
});

export const { setStyle } = viewStyleSlice.actions;

export const viewStyleReducer = viewStyleSlice.reducer;
