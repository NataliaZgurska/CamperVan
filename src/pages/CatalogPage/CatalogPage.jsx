import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader.jsx';
import Filters from '../../components/Filters/Filters.jsx';
import { selectIsLoading } from '../../redux/campers/campersSelectors.js';
import CamperList from '../../components/CamperList/CamperList.jsx';

import css from './CatalogPage.module.css';

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
        <CamperList />
      </div>
    </div>
  );
};

export default CatalogPage;
