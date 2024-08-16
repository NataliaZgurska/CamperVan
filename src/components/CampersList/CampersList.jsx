import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';
import {
  selectCampers,
  selectTotalCountAdverts,
} from '../../redux/campers/campersSelectors';
import {
  getAdverts,
  getTotalCountAdverts,
} from '../../redux/campers/campersOperation';
import Pagination from '../Pagination/Pagination';
import { POSTS_PER_PAGE } from '../../constants';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * POSTS_PER_PAGE;
  const firstPostIndex = lastPostIndex - POSTS_PER_PAGE;

  useEffect(() => {
    dispatch(getTotalCountAdverts());
  }, []);

  useEffect(() => {
    dispatch(getAdverts(currentPage));
  }, [currentPage]);

  // *********** FavoritesCheck *************
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavs(storedItems);
  }, []);

  const toggleHeartClick = id => {
    let updatedItems;
    if (favs.includes(id)) {
      updatedItems = favs.filter(itemId => itemId !== id);
    } else {
      updatedItems = [...favs, id];
    }
    setFavs(updatedItems);
    localStorage.setItem('favorites', JSON.stringify(updatedItems));
  };

  return (
    <div className={css.campersListContainer}>
      {campers && (
        <ul className={css.campersList}>
          {campers.map(camper => (
            <li key={camper._id}>
              <CamperItem
                camper={camper}
                toggleHeartClick={toggleHeartClick}
                isFavorite={favs.includes(camper._id)}
              />
            </li>
          ))}
        </ul>
      )}

      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default CampersList;
