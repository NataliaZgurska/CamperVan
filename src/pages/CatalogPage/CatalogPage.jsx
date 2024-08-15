import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';

import css from './CatalogPage.module.css';
import { selectIsLoading } from '../../redux/campers/campersSelectors.js';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      <Helmet>
        <title>CamperCatalog</title>
      </Helmet>

      {isLoading && <Loader />}

      <div className={css.catalogFilterContainer}>
        <Filters />
        <CampersList />
      </div>
    </div>
  );
};

export default CatalogPage;
