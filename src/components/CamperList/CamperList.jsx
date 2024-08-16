import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CamperItem from '../CamperItem/CamperItem';
import {
  selectCampers,
  selectTotalCountAdverts,
} from '../../redux/campers/campersSelectors';
import {
  getAdverts,
  getCamperById,
  getTotalCountAdverts,
} from '../../redux/campers/campersOperation';
import Pagination from '../Pagination/Pagination';
import { POSTS_PER_PAGE } from '../../constants';

import css from './CamperList.module.css';
import {
  addFavorite,
  delFavorite,
  selectFavorites,
} from '../../redux/favorites';
import { useLocation } from 'react-router-dom';

const CamperList = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * POSTS_PER_PAGE;
  const firstPostIndex = lastPostIndex - POSTS_PER_PAGE;
  let campers = null;
  let totalPages = 0;

  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];

  if (currentPath === 'catalog') {
    campers = useSelector(selectCampers);
    useEffect(() => {
      dispatch(getTotalCountAdverts());
    }, []);

    useEffect(() => {
      dispatch(getAdverts(currentPage));
    }, [currentPage]);

    totalPages = useSelector(selectTotalCountAdverts);
  } else {
    campers = useSelector(selectFavorites);
    totalPages = campers.length;
  }

  // *********** FavoritesCheck *************
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavs(storedItems);
  }, []);

  const toggleHeartClick = camper => {
    let updatedItems;
    if (favs.includes(camper._id)) {
      updatedItems = favs.filter(itemId => itemId !== camper._id);
      dispatch(delFavorite(camper._id));
    } else {
      updatedItems = [...favs, camper._id];
      dispatch(addFavorite(camper));
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

      {totalPages > POSTS_PER_PAGE && (
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default CamperList;
