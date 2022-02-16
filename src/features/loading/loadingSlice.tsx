import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    load: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { load } = loadingSlice.actions;

export const selectLoading = (state: RootState) => state.loading.loading;

export default loadingSlice.reducer;
