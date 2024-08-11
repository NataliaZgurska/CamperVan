import React from 'react';
import { Helmet } from 'react-helmet-async';
import Filters from '../../components/Filters/Filters.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <div>
      <Helmet>
        <title>CamperCatalog</title>
      </Helmet>

      {/* {isLoading && !error && <b>Request in a process</b>} */}

      <div className={css.catalogFilterContainer}>
        <Filters />
        <CampersList />
      </div>
    </div>
  );
};

export default CatalogPage;
