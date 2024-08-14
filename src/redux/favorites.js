import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.items.push(action.payload);
    },
    delFavorite(state, action) {
      state.items = state.items.filter(camper => {
        camper._id !== action.payload;
      });
    },
  },
});

export const selectFavorites = state => state.favorite.items;
export const { addFavorite, delFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
