import React, { useEffect, useState } from 'react';
import sprite from '../../assets/icons/icons.svg';
import css from './FavoritesPage.module.css';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites';
import CamperList from '../../components/CamperList/CamperList';
import { selectIsLoading } from '../../redux/campers/campersSelectors';
import { Helmet } from 'react-helmet-async';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const FavoritesPage = () => {
  const favCampers = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Helmet>
        <title>CamperFavorites</title>
      </Helmet>

      {isLoading && <Loader />}

      {favCampers.length > 0 ? (
        <CamperList />
      ) : (
        <div className={css.welcomeTextContainer}>
          <h2>You haven't selected any favorite campers yet.</h2>
          <div className={css.switchContainer}>
            <h2>
              Switch to the{' '}
              <NavLink className={getNavLinkClassName} to="/catalog">
                Catalog
              </NavLink>{' '}
              and choose
            </h2>
            <svg className={css.icon} width="26" height="26">
              <use href={`${sprite}#icon-heart`} />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
