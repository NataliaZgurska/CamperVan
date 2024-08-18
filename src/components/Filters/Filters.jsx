import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import sprite from '../../assets/icons/icons.svg';
import { useForm } from 'react-hook-form';

import css from './Filters.module.css';

const Filters = () => {
  const [location, setLocation] = useState('');
  const handleChangeLocation = event => {
    setLocation(event.target.value);
  };

  const { register, handleSubmit, watch, reset } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className={css.filtersContainer}>
      <label className={css.locationLabel}>
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
      </label>

      <p className={css.filtersTitle}>Filters</p>

      <form onSubmit={handleSubmit(onSubmit)} className={css.filterForm}>
        <div className={css.equipmentFilterWrap}>
          <p className={css.vehicleFilterTitle}>Vehicle equipment</p>

          <div className={css.equipmentFilter}>
            <label className={css.checkboxSquare}>
              <input
                type="checkbox"
                {...register('equipment')}
                value={'AC'}
                className={css.hiddenCheckbox}
              />
              <span className={css.customCheckbox}>
                AC
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-ac`} />
                </svg>
              </span>
            </label>

            <label className={css.checkboxSquare}>
              <input
                type="checkbox"
                {...register('equipment')}
                value={'automatic'}
                className={css.hiddenCheckbox}
              />
              <span className={css.customCheckbox}>
                Automatic
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-automatic`} />
                </svg>
              </span>
            </label>

            <label className={css.checkboxSquare}>
              <input
                type="checkbox"
                {...register('equipment')}
                value={'kitchen'}
                className={css.hiddenCheckbox}
              />
              <span className={css.customCheckbox}>
                kitchen
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-Kitchen`} />
                </svg>
              </span>
            </label>

            <label className={css.checkboxSquare}>
              <input
                type="checkbox"
                {...register('equipment')}
                value={'TV'}
                className={css.hiddenCheckbox}
              />
              <span className={css.customCheckbox}>
                TV
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-tv`} />
                </svg>
              </span>
            </label>

            <label className={css.checkboxSquare}>
              <input
                type="checkbox"
                {...register('equipment')}
                value={'toilet'}
                className={css.hiddenCheckbox}
              />
              <span className={css.customCheckbox}>
                Shower/WC
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-shower`} />
                </svg>
              </span>
            </label>
          </div>
        </div>

        <div className={css.typeFilterWrap}>
          <p className={css.vehicleFilterTitle}>Vehicle type</p>

          <div className={css.equipmentFilter}>
            <label className={css.checkboxSquare}>
              <input
                type="radio"
                {...register('vehicleType')}
                value={'van'}
                className={css.hiddenCheckbox}
              />
              <span className={css.customCheckbox}>
                Van
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-camper-van`} />
                </svg>
              </span>
            </label>

            <label className={css.checkboxSquare}>
              <input
                type="radio"
                {...register('vehicleType')}
                value={'fullyIntegrated'}
                className={css.hiddenCheckbox}
              />
              <span className={css.customCheckbox}>
                FullyIntegrated
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-camper-fully`} />
                </svg>
              </span>
            </label>

            <label className={css.checkboxSquare}>
              <input
                type="radio"
                {...register('vehicleType')}
                value={'alcove'}
                className={css.hiddenCheckbox}
              />
              <span className={css.customCheckbox}>
                Alcove
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-camper-alcove`} />
                </svg>
              </span>
            </label>
          </div>
        </div>

        {/* <label>Age group</label>
        <select {...register('ageGroup')}>
          <option value="0">0 - 1</option>
          <option value="1">1 - 100</option>
        </select> */}

        <div className={css.filterBtns}>
          <button type="submit" className="btn red">
            Search
          </button>

          <button type="button" onClick={() => reset()} className="btn white">
            Clear Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
