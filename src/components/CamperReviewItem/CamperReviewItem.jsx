import React from 'react';
import staryellow from '../../assets/img/staryellow.png';
import stargrey from '../../assets/img/stargrey.png';
import css from './CamperReviewItem.module.css';

const CamperReviewItem = ({ review }) => {
  const { reviewer_name, reviewer_rating, comment } = review;

  const stars = Array.from({ length: 5 }, (_, index) =>
    index < reviewer_rating ? (
      <img
        key={index}
        src={staryellow}
        alt="Star"
        style={{ width: '16px', height: '16px' }}
      />
    ) : (
      <img
        key={index}
        src={stargrey}
        alt="NoStar"
        style={{ width: '16px', height: '16px' }}
      />
    )
  );

  return (
    <div className={css.reviewContainer}>
      <div className={css.photoNameRange}>
        <div className={css.photo}>{reviewer_name[0].toUpperCase()}</div>
        <div className={css.nameRange}>
          <p className={css.name}>{reviewer_name}</p>
          <div className={css.range}>{stars}</div>
        </div>
      </div>

      <p className={css.reviewText}>{comment}</p>
    </div>
  );
};

export default CamperReviewItem;
