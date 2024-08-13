import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';
import { fetchAdverts, fetchTotalCountAdverts } from '../../redux/operation';

const CampersList = () => {
  const dispatch = useDispatch();
  const { adverts, totalAdverts, isLoading, error } = useSelector(
    state => state.adverts
  );
  const [page, setPage] = useState(1);
  const [btnLoadMore, setBtnLoadMore] = useState(true);

  useEffect(() => {
    dispatch(fetchTotalCountAdverts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAdverts(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    (page + 1) * 4 < totalAdverts
      ? setBtnLoadMore(true)
      : setBtnLoadMore(false);
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={css.campersListContainer}>
      {adverts && (
        <ul className={css.campersList}>
          {adverts.map(advert => (
            <li key={advert._id}>
              <CamperItem camper={advert} />
            </li>
          ))}
        </ul>
      )}

      {btnLoadMore && (
        <button className="btn white" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CampersList;
