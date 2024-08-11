import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    campers: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, handlePending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(fetchAdverts.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
