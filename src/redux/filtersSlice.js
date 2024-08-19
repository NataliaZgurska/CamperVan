import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectCampers } from './campers/campersSelectors';

const filtersInitialState = {
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
    },
    resetFilter(state) {
      state.equipment = [];
      state.vehicleType = null;
    },
  },
});

export const { setFilter, resetFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

export const selectFilter = state => state.filters;

export const selectVisibleCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filterState) => {
    console.log('calculating filtered campers:', filterState);

    let typedCampers = [];
    let filteredCampers = [];

    if (filterState.vehicleType) {
      typedCampers = campers.filter(
        camper => camper.form === filterState.vehicleType
      );
    } else {
      typedCampers = [...campers];
    }

    if (filterState.equipment) {
      filteredCampers = typedCampers.filter(camper =>
        filterState.equipment.every(equipment => camper.details[equipment] > 0)
      );
    } else {
      filteredCampers = [...typedCampers];
    }
    return filteredCampers;
  }
);
