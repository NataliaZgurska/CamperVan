import React, { useState } from 'react';
import sprite from '../../assets/icons/icons.svg';
import css from './Filters.module.css';

const Filters = () => {
  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    ShowerWC: false,
  });

  const [vehicleType, setVehicleType] = useState('');

  const handleChangeLocation = event => {
    setLocation(event.target.value);
  };

  const handleEquipmentChange = e => {
    const { name, checked } = e.target;
    setEquipment({
      ...equipment,
      [name]: checked,
    });
  };

  const handleVehicleTypeChange = e => {
    setVehicleType(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('equipment: ', equipment);
    console.log('vehicleType: ', vehicleType);
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

      <form onSubmit={handleSubmit} className={css.filterForm}>
        <div className={css.equipmentFilter}>
          <p className={css.vehicleFilterTitle}>Vehicle equipment</p>

          <div className={css.optionsContainer}>
            <div>
              <input
                type="checkbox"
                name="AC"
                checked={equipment.AC}
                onChange={handleEquipmentChange}
                id="AC"
              />
              <label htmlFor="AC" className={css.optionLabel}>
                <svg className={css.iconOption} width="28" height="24">
                  <use href={`${sprite}#icon-ac`} />
                </svg>
                AC
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                name="Automatic"
                checked={equipment.Automatic}
                onChange={handleEquipmentChange}
                id="Automatic"
              />
              <label htmlFor="Automatic" className={css.optionLabel}>
                <svg className={css.iconOption} width="26" height="27">
                  <use href={`${sprite}#icon-automatic`} />
                </svg>
                Automatic
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                name="Kitchen"
                checked={equipment.Kitchen}
                onChange={handleEquipmentChange}
                id="Kitchen"
              />
              <label htmlFor="Kitchen" className={css.optionLabel}>
                <svg className={css.iconOption} width="21" height="27">
                  <use href={`${sprite}#icon-Kitchen`} />
                </svg>
                Kitchen
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                name="TV"
                checked={equipment.TV}
                onChange={handleEquipmentChange}
                id="TV"
              />
              <label htmlFor="TV" className={css.optionLabel}>
                <svg className={css.iconOption} width="26" height="31">
                  <use href={`${sprite}#icon-tv`} />
                </svg>
                TV
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                name="ShowerWC"
                checked={equipment.ShowerWC}
                onChange={handleEquipmentChange}
                id="ShowerWC"
              />
              <label htmlFor="ShowerWC" className={css.optionLabel}>
                <svg className={css.iconOption} width="28" height="28">
                  <use href={`${sprite}#icon-shower`} />
                </svg>
                Shower/WC
              </label>
            </div>
          </div>
        </div>

        <div className={css.typeFilter}>
          <p className={css.vehicleFilterTitle}> Vehicle type</p>

          <div className={css.optionsContainer}>
            <div>
              <input
                type="radio"
                value="van"
                checked={vehicleType === 'van'}
                id="van"
                onChange={handleVehicleTypeChange}
              />
              <label htmlFor="van" className={css.optionLabel}>
                <svg className={css.iconOption} width="40" height="28">
                  <use href={`${sprite}#icon-camper-van`} />
                </svg>
                Van
              </label>
            </div>

            <div>
              <input
                type="radio"
                value="fully"
                checked={vehicleType === 'fully'}
                id="fully"
                onChange={handleVehicleTypeChange}
              />
              <label htmlFor="fully" className={css.optionLabel}>
                <svg className={css.iconOption} width="40" height="29">
                  <use href={`${sprite}#icon-camper-fully`} />
                </svg>
                Fully Integrated
              </label>
            </div>

            <div>
              <input
                type="radio"
                value="alcove"
                checked={vehicleType === 'alcove'}
                id="alcove"
                onChange={handleVehicleTypeChange}
              />
              <label htmlFor="alcove" className={css.optionLabel}>
                <svg className={css.iconOption} width="40" height="29">
                  <use href={`${sprite}#icon-camper-alcove`} />
                </svg>
                Alcove
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn" disabled>
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;
