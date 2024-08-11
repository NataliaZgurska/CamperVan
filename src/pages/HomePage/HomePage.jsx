import React from 'react';
import logo from '../../assets/favicon/favicon.png';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <div className={css.homePagePicture}></div>
      <div className={css.homePageText}>
        <div className={css.homePageTitle}>
          <img src={logo} alt="logo" width="40px" height="40px" />
          <h1>Сampers Rent</h1>
        </div>

        <h2>A good camper will ensure a comfortable life! </h2>
        <h2>Look through our catalog</h2>
        <h2> Order </h2>
        <h2>And enjoy the trip!</h2>
      </div>
    </div>
  );
};

export default HomePage;
