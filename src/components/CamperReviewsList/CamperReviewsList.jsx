import React from 'react';
import CamperReviewItem from '../CamperReviewItem/CamperReviewItem';

import css from './CamperReviewsList.module.css';

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
