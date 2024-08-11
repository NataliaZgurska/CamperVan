import React from 'react';
import sprite from '../../assets/icons/icons.svg';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  return (
    <div className={css.noFavContainer}>
      {/* <h2>Look through our catalog and choose what you like</h2> */}
      <svg className={css.icon} width="26" height="26">
        <use href={`${sprite}#icon-heart`} />
      </svg>
      <h2>
        Soon! You will have the opportunity to choose your favorite campers and
        save them on this page
      </h2>
    </div>
  );
};

export default FavoritesPage;
