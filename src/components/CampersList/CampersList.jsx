import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';
import { selectCampers } from '../../redux/campers/campersSelectors';
import { getAllAdverts } from '../../redux/campers/campersOperation';
import Pagination from '../Pagination/Pagination';

const CampersList = () => {
  const postsPerPage = 4;

  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(getAllAdverts());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = campers.slice(firstPostIndex, lastPostIndex);

  // *********** FavoritesCheck *************
  // const [favs, setFavs] = useState([]);

  // useEffect(() => {
  //   const storedItems = JSON.parse(localStorage.getItem('favorites')) || [];
  //   setFavs(storedItems);
  // }, []);

  // const toggleHeartClick = id => {
  //   let updatedItems;
  //   if (favs.includes(id)) {
  //     updatedItems = favs.filter(itemId => itemId !== id);
  //   } else {
  //     updatedItems = [...favs, id];
  //   }
  //   setFavs(updatedItems);
  //   localStorage.setItem('favorites', JSON.stringify(updatedItems));
  // };

  return (
    <div className={css.campersListContainer}>
      {currentPosts && (
        <ul className={css.campersList}>
          {currentPosts.map(camper => (
            <li key={camper._id}>
              <CamperItem camper={camper} />
            </li>
          ))}
        </ul>
      )}

      <Pagination
        totalPosts={campers.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default CampersList;

//  <CamperItem
//    camper={advert}
//    toggleHeartClick={toggleHeartClick}
//    isFavorite={favs.includes(advert._id)}
//  />;

// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import CamperItem from '../CamperItem/CamperItem';
// import css from './CampersList.module.css';
// import { fetchAdverts, fetchTotalCountAdverts } from '../../redux/operation';

// const CampersList = () => {
//   const dispatch = useDispatch();
//   const { adverts, totalAdverts, isLoading, error } = useSelector(
//     state => state.adverts
//   );
//   const [page, setPage] = useState(1);
//   const [btnLoadMore, setBtnLoadMore] = useState(true);

//   useEffect(() => {
//     dispatch(fetchTotalCountAdverts());
//   }, [dispatch]);

//   useEffect(() => {
//     dispatch(fetchAdverts(page));
//   }, [dispatch, page]);

//   const handleLoadMore = () => {
//     (page + 1) * 4 < totalAdverts
//       ? setBtnLoadMore(true)
//       : setBtnLoadMore(false);
//     setPage(prevPage => prevPage + 1);
//   };

//   *********** FavoritesCheck *************
//   const [favs, setFavs] = useState([]);

//   useEffect(() => {
//     const storedItems = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavs(storedItems);
//   }, []);

//   const toggleHeartClick = id => {
//     let updatedItems;
//     if (favs.includes(id)) {
//       updatedItems = favs.filter(itemId => itemId !== id);
//     } else {
//       updatedItems = [...favs, id];
//     }
//     setFavs(updatedItems);
//     localStorage.setItem('favorites', JSON.stringify(updatedItems));
//   };

//   return (
//     <div className={css.campersListContainer}>
//       {adverts && (
//         <ul className={css.campersList}>
//           {adverts.map(advert => (
//             <li key={advert._id}>
//               <CamperItem
//                 camper={advert}
//                 toggleHeartClick={toggleHeartClick}
//                 isFavorite={favs.includes(advert._id)}
//               />
//             </li>
//           ))}
//         </ul>
//       )}

//       {btnLoadMore && (
//         <button className="btn white" onClick={handleLoadMore}>
//           Load More
//         </button>
//       )}
//     </div>
//   );
// };

// export default CampersList;
