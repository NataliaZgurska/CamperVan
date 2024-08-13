import React from 'react';
import css from './CamperReviewsList.module.css';
import CamperReviewItem from '../CamperReviewItem/CamperReviewItem';

const CamperReviewsList = ({ camper }) => {
  const { reviews } = camper;

  return (
    <div>
      <ul className={css.reviewsContainer}>
        {Array.isArray(reviews) &&
          reviews.map((item, index) => {
            return (
              <li key={index}>
                <CamperReviewItem review={item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CamperReviewsList;
