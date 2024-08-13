import React, { useState } from 'react';
import { LuEuro } from 'react-icons/lu';
import CamperFeatures from '../CamperFeatures/CamperFeatures';
import CamperReviewsList from '../CamperReviewsList/CamperReviewsList';
import { useSelector } from 'react-redux';
import FormBook from '../FormBook/FormBook';

import css from './CamperModal.module.css';

const CamperModal = ({ camper }) => {
  const { name, price, rating, location, description, gallery, reviews } =
    camper;

  const [activeComponent, setActiveComponent] = useState('features');

  return (
    <div className={css.modalContainer}>
      <div className={css.modalHeader}>
        <h2 className={css.title}>{name}</h2>

        <div className={css.modalRatingPrice}>
          <div className={css.ratingLocation}>
            <p className={css.rating}>
              {rating} ({reviews.length} Reviews)
            </p>
            <p className={css.location}> {location}</p>
          </div>
        </div>

        <h2 className={css.modalPrice}>
          <LuEuro />
          {`${price}.00`}
        </h2>
      </div>

      <ul className={css.modalGalleryList}>
        <li className={css.modalGalleryListItem}>
          <img
            src={gallery[0]}
            width={290}
            // height={310}
            alt="camper photo1"
            loading="lazy"
          />
        </li>
        <li className={css.modalGalleryListItem}>
          <img
            src={gallery[1]}
            width={290}
            // height={310}
            alt="camper photo2"
            loading="lazy"
          />
        </li>
        <li className={css.modalGalleryListItem}>
          <img
            src={gallery[2]}
            width={290}
            // height={310}
            alt="camper photo3"
            loading="lazy"
          />
        </li>
      </ul>

      <div className={css.description}>
        <p className={css.descriptionText}>{description}</p>

        <div className={css.featuresReviewsNavigation}>
          <button
            className={`${css.featuresReviewsLink} ${
              activeComponent === 'features' ? css.active : ''
            }`}
            onClick={() => setActiveComponent('features')}
          >
            Features
          </button>
          <button
            className={`${css.featuresReviewsLink} ${
              activeComponent === 'reviews' ? css.active : ''
            }`}
            onClick={() => setActiveComponent('reviews')}
          >
            Reviews
          </button>
        </div>

        <div className={css.featureReviewsForm}>
          <div className={css.featureReviews}>
            {activeComponent === 'features' && (
              <CamperFeatures camper={camper} />
            )}
            {activeComponent === 'reviews' && (
              <CamperReviewsList camper={camper} />
            )}
          </div>

          <div className={css.form}>
            <FormBook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperModal;

// <div className={css.featuresReviewsForm}>
//   featuresReviewsForm
{
  /* <div>
            {activeComponent === 'features' && (
              <CamperFeatures camper={camper} />
            )}
            {activeComponent === 'reviews' && (
              <CamperReviewsList camper={camper} />
            )}
          </div> */
}
{
  /* <div className={css.featureReviews}>featureReviews</div>
          <div className={css.form}>Form</div> */
}
{
  /* <FormBook /> */
}
{
  /* </div>; */
}
