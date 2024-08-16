import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favs: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.favs.push(action.payload);
    },
    delFavorite(state, action) {
      state.favs = state.favs.filter(item => item._id !== action.payload);
    },
  },
});

export const selectFavorites = state => state.favorite.favs;
export const { addFavorite, delFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
