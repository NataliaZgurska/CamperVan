import React, { useState } from 'react';
import sprite from '../../assets/icons/icons.svg';
import { useForm } from 'react-hook-form';

import css from './Filters.module.css';
import { resetFilter, setFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectLocations } from '../../redux/selectors';

import clsx from 'clsx';
import classNames from 'classnames';

const Filters = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilter);
  const locationArray = useSelector(selectLocations);

  const [location, setLocation] = useState('');
  const handleChangeLocation = event => {
    setLocation(event.target.value);
  };

  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = data => {
    dispatch(setFilter(data));
    console.log('filter form data: ', data);
  };

  const handleResetBtn = () => {
    dispatch(resetFilter());
    reset();
  };

  return (
    <div className={css.filtersContainer}>
      {/* <label className={css.locationLabel}>
        Location
        <input
          onChange={handleChangeLocation}
          className={css.locationInput}
          type="text"
          name="location"
        />
        <svg className={css.iconMap} width="18" height="20">
          <use href={`${sprite}#icon-map-pin`} />
        </svg>
      </label> */}

      <p className={css.filtersTitle}>Filters</p>

      <form onSubmit={handleSubmit(onSubmit)} className={css.filterForm}>
        {/* /********** Location  ********************/}

        <div className={css.typeFilterWrap}>
          <label className={css.vehicleFilterTitle}>Location</label>
          <select {...register('location')} className={css.locationInput}>
            <option key={'all'} value={'all'}>
              All
            </option>
            {locationArray.map(location => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* *************** vehicleType ****************  */}
        <div className={css.typeFilterWrap}>
          <p className={css.vehicleFilterTitle}>Vehicle type</p>

          <div className={css.equipmentFilter}>
            <label className={css.checkboxSquare}>
              <input
                type="radio"
                {...register('vehicleType')}
                value={'panelTruck'}
                className={css.hiddenCheckbox}
              />
              <span
                className={clsx(css.customCheckbox, {
                  [css.active]: filterState.vehicleType === 'panelTruck',
                })}
              >
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-camper-van`} />
                </svg>
                Panel Truck
              </span>
            </label>

            <label className={css.checkboxSquare}>
              <input
                type="radio"
                {...register('vehicleType')}
                value={'fullyIntegrated'}
                className={css.hiddenCheckbox}
              />
              <span
                className={clsx(css.customCheckbox, {
                  [css.active]: filterState.vehicleType === 'fullyIntegrated',
                })}
              >
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-camper-fully`} />
                </svg>
                Fully Integrated
              </span>
            </label>

            <label className={css.checkboxSquare}>
              <input
                type="radio"
                {...register('vehicleType')}
                value={'alcove'}
                className={css.hiddenCheckbox}
              />
              <span
                className={clsx(css.customCheckbox, {
                  [css.active]: filterState.vehicleType === 'alcove',
                })}
              >
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-camper-alcove`} />
                </svg>
                Alcove
              </span>
            </label>
          </div>
        </div>
        {/* ************** equipment ********************  */}
        <div className={css.equipmentFilterWrap}>
          <p className={css.vehicleFilterTitle}>Vehicle equipment</p>

          <div className={css.equipmentFilter}>
            <label className={css.checkboxSquare}>
              <input
                type="checkbox"
                {...register('equipment')}
                value={'kitchen'}
                className={css.hiddenCheckbox}
              />
              <span
                className={classNames(css.customCheckbox, {
                  [css.active]:
                    filterState.equipment.length > 0 &&
                    filterState.equipment.includes('kitchen'),
                })}
              >
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-Kitchen`} />
                </svg>
                Kitchen
              </span>
            </label>

            <label className={css.checkboxSquare}>
              <input
                type="checkbox"
                {...register('equipment')}
                value={'toilet'}
                className={css.hiddenCheckbox}
              />
              <span
                className={classNames(css.customCheckbox, {
                  [css.active]:
                    filterState.equipment.length > 0 &&
                    filterState.equipment.includes('toilet'),
                })}
              >
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-shower`} />
                </svg>
                Shower/WC
              </span>
            </label>

            <label className={css.checkboxSquare}>
              <input
                type="checkbox"
                {...register('equipment')}
                value={'TV'}
                className={css.hiddenCheckbox}
              />
              <span
                className={classNames(css.customCheckbox, {
                  [css.active]:
                    filterState.equipment.length > 0 &&
                    filterState.equipment.includes('TV'),
                })}
              >
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-tv`} />
                </svg>
                TV
              </span>
            </label>
          </div>
        </div>

        <div className={css.filterBtns}>
          <button type="submit" className="btn red">
            Search
          </button>

          <button type="button" onClick={handleResetBtn} className="btn white">
            Clear Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;

// <label className={css.checkboxSquare}>
//   <input
//     type="checkbox"
//     {...register('equipment')}
//     value={'AC'}
//     className={css.hiddenCheckbox}
//   />
//   <span className={css.customCheckbox}>
//     <svg className={css.iconOption} width="28" height="24">
//       <use href={`${sprite}#icon-ac`} />
//     </svg>
//     AC
//   </span>
// </label>;

// <label className={css.checkboxSquare}>
//   <input
//     type="checkbox"
//     {...register('equipment')}
//     value={'automatic'}
//     className={css.hiddenCheckbox}
//   />
//   <span className={css.customCheckbox}>
//     <svg className={css.iconOption} width="28" height="24">
//       <use href={`${sprite}#icon-automatic`} />
//     </svg>
//     Automatic
//   </span>
// </label>;
