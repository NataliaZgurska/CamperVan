import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  location: 'all',
  equipment: [],
  vehicleType: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.equipment = action.payload.equipment;
      state.vehicleType = action.payload.vehicleType;
      state.location = action.payload.location;
    },
    resetFilter(state) {
      state.equipment = [];
      state.vehicleType = null;
      state.location = 'all';
    },
  },
});

export const { setFilter, resetFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
