import { createSlice } from '@reduxjs/toolkit';
import {
  getAdverts,
  getAllAdverts,
  getTotalCountAdverts,
} from './campersOperation';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    totalCounts: 0,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getTotalCountAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTotalCountAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.totalCounts = action.payload;
      })
      .addCase(getTotalCountAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
