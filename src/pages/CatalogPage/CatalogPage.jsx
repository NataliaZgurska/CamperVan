import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { fetchAdverts } from '../../redux/operation';
import CampersList from '../../components/CampersList/CampersList.jsx';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <b>Request in a process</b>}
      <CampersList />
    </div>
  );
};

export default CatalogPage;
