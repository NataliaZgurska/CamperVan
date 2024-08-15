import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../../assets/favicon/favicon.png';
import { imagesArrow } from '../../assets/img/carImages';
import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const HomePage = () => {
  const images = imagesArrow;

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImagesCount = 3;

  const nextSlide = () => {
    if (currentIndex < images.length - visibleImagesCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={css.homePageContainer}>
      <div className={css.homePageTextWrap}>
        <div className={css.homePageTiileWrap}>
          <div className={css.homePageTitle}>
            <img src={logo} alt="logo" width="60px" height="60px" />
            <h1>СampersPark </h1>
          </div>

          <h2 className={css.homePageText2}>
            будинки на колесах, в яких хочеться жити
          </h2>
        </div>

        <div className={css.homePageQuestions}>
          <p>
            <i>Збираєтесь у подорож?</i>
          </p>
          <p>
            <i>Не хочете бути прив'язаним до одного місця?</i>
          </p>
          <p>
            <i>Плануєте придбати кемпер і потрібен тест-драйв?</i>
          </p>
        </div>

        <h2 className={css.homePageText3}>
          Все це можна влаштувати з
          <span className={css.titleText}> CampersPark</span>: бери трейлер в
          оренду!
        </h2>

        <NavLink className={getNavLinkClassName} to="/catalog">
          Обирай кемпер з каталогу
        </NavLink>
        <h2 className={css.homePageText3}>Замовляй та насолоджуйся!</h2>
      </div>

      <div className={css.carousel}>
        <button
          onClick={prevSlide}
          className={css.leftArrow}
          disabled={currentIndex === 0}
        >
          <IoIosArrowBack size={40} />
        </button>

        <div className={css.sliderImgList}>
          <div className={css.carouselImages}>
            {images
              .slice(currentIndex, currentIndex + visibleImagesCount)
              .map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`slide-${index}`}
                  className={css.image}
                />
              ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className={css.rightArrow}
          disabled={currentIndex >= images.length - visibleImagesCount}
        >
          <IoIosArrowForward size={40} />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
