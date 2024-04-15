import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IFilter } from '../../types/types';

export interface IFilterSlice {
  filter: IFilter;
}

const initialState: IFilterSlice = {
  filter: {
    from: '',
    to: '',
    loadingDate: '',
    act: ''
  }
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<IFilterSlice>) => {
      console.log(action);
      state.filter = action.payload.filter;
    }
  }
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
