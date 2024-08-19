import React from 'react';
import { useSelector } from 'react-redux';
import { selectCampers } from '../redux/campers/campersSelectors';
import { selectFilter, selectVisibleCampers } from '../redux/filtersSlice';

// const campersArray = [
//   {
//     _id: '1',
//     name: 'alcove_kitchen_TV_toilet',
//     price: 10000,
//     location: 'Ukraine, Kyiv',
//     transmission: 'automatic',
//     form: 'alcove',
//     details: {
//       AC: 1,
//       airConditioner: 1,
//       bathroom: 1,
//       kitchen: 1,
//       beds: 3,
//       TV: 1,
//       CD: 1,
//       radio: 1,
//       shower: 1,
//       toilet: 1,
//       freezer: 1,
//       hob: 3,
//       microwave: 1,
//       gas: '35kg',
//       water: '151l',
//     },
//   },
//   {
//     _id: '2',
//     name: 'alcove_kitchen_-_toilet',
//     price: 8000,
//     location: 'Ukraine, Lviv',
//     transmission: 'mechanic',
//     form: 'alcove',
//     details: {
//       AC: 1,
//       airConditioner: 1,
//       bathroom: 0,
//       kitchen: 1,
//       beds: 3,
//       TV: 0,
//       CD: 1,
//       radio: 1,
//       shower: 1,
//       toilet: 1,
//       freezer: 1,
//       hob: 3,
//       microwave: 1,
//       gas: '35kg',
//       water: '151l',
//     },
//   },
//   {
//     _id: '3',
//     name: 'alcove_kitchen_TV_-',
//     price: 9000,
//     location: 'Ukraine, Odessa',
//     transmission: 'automatic',
//     form: 'alcove',
//     details: {
//       AC: 1,
//       airConditioner: 1,
//       bathroom: 1,
//       kitchen: 1,
//       beds: 3,
//       TV: 1,
//       CD: 1,
//       radio: 1,
//       shower: 1,
//       toilet: 0,
//       freezer: 1,
//       hob: 3,
//       microwave: 1,
//       gas: '35kg',
//       water: '151l',
//     },
//   },
//   {
//     _id: '4',
//     name: 'panelTruck_kitchen_TV_toilet',
//     price: 9000,
//     location: 'Ukraine, Odessa',
//     transmission: 'automatic',
//     form: 'panelTruck',
//     details: {
//       AC: 1,
//       airConditioner: 1,
//       bathroom: 1,
//       kitchen: 1,
//       beds: 3,
//       TV: 1,
//       CD: 1,
//       radio: 1,
//       shower: 1,
//       toilet: 1,
//       freezer: 1,
//       hob: 3,
//       microwave: 1,
//       gas: '35kg',
//       water: '151l',
//     },
//   },
// ];

// const filterState = {
//   equipment: [],
//   vehicleType: 'fullyIntegrated',
// };

const FiltersPage = () => {
  // const filteredCampers = useSelector(selectVisibleCampers);
  const filterState = useSelector(selectFilter);
  console.log('filterState: ', filterState);
  console.log('filterState.vehicleType: ', filterState.vehicleType);
  console.log('filterState.equipment: ', filterState.equipment);

  const campersArray = useSelector(selectCampers);
  let typedCampers = [];
  let filteredCampers = [];

  if (filterState.vehicleType) {
    typedCampers = campersArray.filter(
      camper => camper.form === filterState.vehicleType
    );
  } else {
    typedCampers = [...campersArray];
  }

  if (filterState.equipment) {
    filteredCampers = typedCampers.filter(camper =>
      filterState.equipment.every(equipment => camper.details[equipment] > 0)
    );
  } else {
    filteredCampers = [...typedCampers];
  }

  // console.log('all campers: ', campersArray);
  //  console.log('typedCampers: ', typedCampers);
  // console.log('filteredCampers: ', filteredCampers);

  return (
    <div>
      {filteredCampers && (
        <ul>
          {filteredCampers.map(camper => (
            <li key={camper._id}>{camper.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FiltersPage;
