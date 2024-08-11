import React from 'react';
import css from './CamperReviewsList.module.css';
import FormBook from '../FormBook/FormBook.jsx';
import CamperReviews from '../CamperReviews/CamperReviews.jsx';

const CamperReviewsList = ({ camper }) => {
  const { reviews } = camper;

  return (
    <div className={css.reviewsFormContainer}>
      <div>
        <ul className={css.reviewsContainer}>
          {Array.isArray(reviews) &&
            reviews.map((item, index) => {
              return (
                <li key={index}>
                  <CamperReviews review={item} />
                </li>
              );
            })}
        </ul>
      </div>

      <FormBook />
    </div>
  );
};

export default CamperReviewsList;
