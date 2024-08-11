import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts, fetchTotalCountAdverts } from './operation';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    totalAdverts: 0,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.adverts = [...state.adverts, ...action.payload];
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchTotalCountAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTotalCountAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalAdverts = action.payload;
      })
      .addCase(fetchTotalCountAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
