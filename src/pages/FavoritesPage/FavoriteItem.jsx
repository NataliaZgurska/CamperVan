import React, { useEffect, useState } from 'react';
import sprite from '../../assets/icons/icons.svg';
import css from '../../components/CampersList/CampersList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  delFavorite,
  selectFavorites,
} from '../../redux/favorites';

const FavoriteItem = ({ camper, toggleHeartClick, isFavorite }) => {
  const { name } = camper;
  const id = camper._id;

  return (
    <>
      <div className={css.priceHeartWrap}>
        <p> {name}</p>

        <button
          className={css.heartBtn}
          onClick={() => {
            toggleHeartClick(id);
          }}
        >
          <svg
            className={`${css.heart} ${
              isFavorite ? css.redHeart : css.whiteHeart
            }`}
            width="24"
            height="24"
          >
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </button>
      </div>
    </>
  );
};

export default FavoriteItem;

// isFav ? dispatch(delFavorite(_id)) : dispatch(addFavorite(camper));
// if (isFav) {
//   console.log('del: ', camper._id);
//   dispatch(delFavorite(camper._id));
// } else {
//   console.log('add: ', camper._id);
//   dispatch(addFavorite(camper));
// }

//   useEffect(() => {
//     const favCheck = favArray.some(item => item._id === camper._id);
//     setIsFav(favCheck);
//   }, [favArray]);

//   const dispatch = useDispatch();
//   const favArray = useSelector(selectFavorites);

{
  /* <svg
  className={`${css.heart} ${isFav ? css.redHeart : css.whiteHeart}`}
  width="24"
  height="24"
>
  <use href={`${sprite}#icon-heart`} />
</svg>; */
}
