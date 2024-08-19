import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.items;
export const selectTotalCountAdverts = state => state.campers.totalCounts;
export const selectcamperById = state => state.campers.camperById;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;

export const selectFavorites = state => state.favorite.favs;

export const selectFilter = state => state.filters;

// export const selectVisibleCampers = createSelector(
//   [selectCampers, selectFilter],
//   (campers, filterState) => {
//     // console.log('calculating filtered campers:', filterState);
//     let locationCampers = [];
//     let typedCampers = [];
//     let filteredCampers = [];

//     if (filterState.location) {
//       locationCampers = campers.filter(
//         camper => camper.location === filterState.location
//       );
//     } else {
//       locationCampers = [...campers];
//     }

//     if (filterState.vehicleType) {
//       typedCampers = locationCampers.filter(
//         camper => camper.form === filterState.vehicleType
//       );
//     } else {
//       typedCampers = [...locationCampers];
//     }

//     if (filterState.equipment) {
//       filteredCampers = typedCampers.filter(camper =>
//         filterState.equipment.every(equipment => camper.details[equipment] > 0)
//       );
//     } else {
//       filteredCampers = [...typedCampers];
//     }
//     return filteredCampers;
//   }
// );

export const selectVisibleCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filterState) => {
    return campers.filter(camper => {
      const matchesLocation =
        // !filterState.location || camper.location === filterState.location;
        filterState.location === 'all' ||
        camper.location === filterState.location;
      const matchesVehicleType =
        !filterState.vehicleType || camper.form === filterState.vehicleType;
      const matchesEquipment =
        !filterState.equipment ||
        filterState.equipment.every(equipment => camper.details[equipment] > 0);

      return matchesLocation && matchesVehicleType && matchesEquipment;
    });
  }
);

export const selectLocations = createSelector([selectCampers], campers => {
  const locationArray = campers.map(camper => camper.location);
  const uniqueLocations = [...new Set(locationArray)];
  return uniqueLocations;
});
