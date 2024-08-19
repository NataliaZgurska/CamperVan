import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/favicon/favicon.png';
import { imagesArrow } from '../../assets/img/carImages';

import clsx from 'clsx';
import css from './HomePage.module.css';
import HomePagePictures from '../../components/HomePagePictures/HomePagePictures';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <div className={css.homePageTextWrap}>
        <div className={css.homePageTiileWrap}>
          <div className={css.homePageTitle}>
            <img src={logo} alt="logo" width="60px" height="60px" />
            <h1>СampersPark </h1>
          </div>

          <h2 className={css.homePageText2}>
            homes on wheels that you want to live in
          </h2>
        </div>
        <div className={css.homePageQuestions}>
          <p>
            <i>Going on a trip?</i>
          </p>
          <p>
            <i>Don't want to be tied to one place?</i>
          </p>
          <p>
            <i>Planning to buy a camper and need a test drive?</i>
          </p>
        </div>

        <h2 className={css.homePageText3}>
          All this can be arranged with
          <span className={css.titleText}> CampersPark</span>: take the trailer
          to rent!
        </h2>

        <NavLink className={getNavLinkClassName} to="/catalog">
          Choose a camper from the catalog
        </NavLink>

        <h2 className={css.homePageText3}>Order and enjoy!</h2>
      </div>

      <div className={css.carouselConteiner}>
        <HomePagePictures />
      </div>
    </div>
  );
};

export default HomePage;

//       будинки на колесах, в яких хочеться жити
//   < i > Збираєтесь у подорож ?</ >
//   <i>Не хочете бути прив'язаним до одного місця?</i>
// <i>Плануєте придбати кемпер і потрібен тест-драйв?</i>
// <h2 className={css.homePageText3}>
//           Все це можна влаштувати з
//           <span className={css.titleText}> CampersPark</span>: бери трейлер в
//           оренду!
//         </h2>
//         Обирай кемпер з каталогу
//         <h2 className={css.homePageText3}>Замовляй та насолоджуйся!</h2>
