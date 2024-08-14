import React, { useEffect, useState } from 'react';
import sprite from '../../assets/icons/icons.svg';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavs(storedItems);
  }, []);

  console.log(favs);

  return (
    <>
      <div className={css.noFavContainer}>
        <svg className={css.icon} width="26" height="26">
          <use href={`${sprite}#icon-heart`} />
        </svg>
        <h2>
          Soon! You will have the opportunity to choose your favorite campers
          and save them on this page
        </h2>
      </div>

      {/* <div>
        {favs && (
          <ul>
            {favs.map(advert => (
              <li key={advert._id}>
                <FavoriteItem
                  camper={advert}
                  toggleHeartClick={toggleHeartClick}
                  isFavorite={favs.includes(advert._id)}
                />
              </li>
            ))}
          </ul>
        )}
      </div> */}
    </>
  );
};

export default FavoritesPage;
