import React from 'react';
import css from './CamperFeatures.module.css';
import FormBook from '../FormBook/FormBook';
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
    <div className={css.featureFormContainer}>
      <div className={css.featuresContainer}>
        <div className={css.featuresOptions}>
          <BoxOption camper={camper} />
        </div>

        <div className={css.featuresDetails}>
          <div className={css.detailsTitle}>Vehicle details</div>
          <div className={css.detailsInfoWrap}>
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
          </div>
        </div>
      </div>

      <FormBook />
    </div>
  );
};

export default CamperFeatures;
