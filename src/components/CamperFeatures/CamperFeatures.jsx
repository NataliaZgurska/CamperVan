import React from 'react';
import css from './CamperFeatures.module.css';
import BoxOption from '../BoxOption/BoxOption';

const CamperFeatures = ({ camper }) => {
  const { form, length, width, height, tank, consumption } = camper;

  let formType = '';

  if (form === 'panelTruck') {
    formType = 'Panel truck';
  } else {
    if (form === 'fullyIntegrated') {
      formType = 'Fully integrated';
    } else {
      formType = 'Alcove';
    }
  }

  return (
    <div className={css.featuresContainer}>
      <div className={css.featuresOptions}>
        <BoxOption camper={camper} />
      </div>

      <div className={css.featuresDetails}>
        <div className={css.detailsTitle}>Vehicle details</div>

        <ul className={css.detailsInfoWrap}>
          <li className={css.detailsInfo}>
            <p>Form</p>
            <p>{formType}</p>
          </li>
          <li className={css.detailsInfo}>
            <p>Length</p>
            <p>{length}</p>
          </li>
          <li className={css.detailsInfo}>
            <p>Width</p>
            <p>{width}</p>
          </li>
          <li className={css.detailsInfo}>
            <p>Height</p>
            <p>{height}</p>
          </li>
          <li className={css.detailsInfo}>
            <p>Tank</p>
            <p>{tank}</p>
          </li>
          <li className={css.detailsInfo}>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </ul>

        {/* <div className={css.detailsInfoWrap}>
          <div className={css.detailsInfo}>
            <p>Form</p>
            <p>{formType}</p>
          </div>

          <div className={css.detailsInfo}>
            <p>Length</p>
            <p>{length}</p>
          </div>

          <div className={css.detailsInfo}>
            <p>Width</p>
            <p>{width}</p>
          </div>

          <div className={css.detailsInfo}>
            <p>Height</p>
            <p>{height}</p>
          </div>

          <div className={css.detailsInfo}>
            <p>Tank</p>
            <p>{tank}</p>
          </div>

          <div className={css.detailsInfo}>
            <p>Consumption</p>
            <p>{consumption}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CamperFeatures;
