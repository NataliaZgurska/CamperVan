import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import CamperItem from '../CamperItem/CamperItem';
import { selectFavorites, selectVisibleCampers } from '../../redux/selectors';

import Pagination from '../Pagination/Pagination';
import { POSTS_PER_PAGE } from '../../constants';

import { addFavorite, delFavorite } from '../../redux/favorites';

import css from './CamperList.module.css';

const CamperList = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * POSTS_PER_PAGE;
  const firstPostIndex = lastPostIndex - POSTS_PER_PAGE;

  let campersCurrent = null;
  let totalPages = 0;

  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];

  if (currentPath === 'catalog') {
    const filteredCampers = useSelector(selectVisibleCampers);

    campersCurrent = filteredCampers.slice(firstPostIndex, lastPostIndex);
    totalPages = filteredCampers.length;
  } else {
    campersCurrent = useSelector(selectFavorites);
    totalPages = campersCurrent.length;
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
      {totalPages > 0 ? (
        <ul className={css.campersList}>
          {campersCurrent.map(camper => (
            <li key={camper._id}>
              <CamperItem
                camper={camper}
                toggleHeartClick={toggleHeartClick}
                isFavorite={favs.includes(camper._id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.noFilteredCampers}>
          <h2>Sorry, there are no campers at your request.</h2>
          <h2>Try to change your filter</h2>
        </div>
      )}

      {totalPages > 4 && currentPath === 'catalog' && (
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

//  const dispatch = useDispatch();
//  const [currentPage, setCurrentPage] = useState(1);
//  const lastPostIndex = currentPage * POSTS_PER_PAGE;
//  const firstPostIndex = lastPostIndex - POSTS_PER_PAGE;
//  let campers = null;
//  let totalPages = 0;

//  const location = useLocation();
//  const currentPath = location.pathname.split('/')[1];

//  if (currentPath === 'catalog') {
//    campers = useSelector(selectCampers);
//    useEffect(() => {
//      dispatch(getTotalCountAdverts());
//    }, []);

//    useEffect(() => {
//      dispatch(getAdverts(currentPage));
//    }, [currentPage]);

//    totalPages = useSelector(selectTotalCountAdverts);
//  } else {
//    campers = useSelector(selectFavorites);
//    totalPages = campers.length;
//  }

// if (currentPath === 'catalog') {
//      campersAll = useSelector(selectCampers);
//   useEffect(() => {
//     dispatch(getAllAdverts());
//   }, []);

//   campersCurrent = campersAll.slice(firstPostIndex, lastPostIndex);
//   totalPages = campersAll.length;
// } else {
//   campersCurrent = useSelector(selectFavorites);
//   totalPages = campersCurrent.length;
// }

// {
//   campersCurrent && (
//     <ul className={css.campersList}>
//       {campersCurrent.map(camper => (
//         <li key={camper._id}>
//           <CamperItem
//             camper={camper}
//             toggleHeartClick={toggleHeartClick}
//             isFavorite={favs.includes(camper._id)}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }
