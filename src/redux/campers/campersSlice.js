import { createSlice } from '@reduxjs/toolkit';
import {
  getAdvertById,
  getAdverts,
  getAllAdverts,
  getTotalCountAdverts,
} from './campersOperation';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    totalCounts: 0,
    camperById: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      // *********** AllAdverts ********
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

      // *********** AdvertsPage ********
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

      // *********** TotalCountAdverts ********
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
      })

      // *********** AdvertById ********
      .addCase(getAdvertById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdvertById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.camperById = action.payload;
      })
      .addCase(getAdvertById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
