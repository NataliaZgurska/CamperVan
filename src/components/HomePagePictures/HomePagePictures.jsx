import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { updateModalIsActive } from '../../redux/modalSlice';
import CamperModalAdd from '../CamperModalAdd/CamperModalAdd';
import { selectCampers } from '../../redux/selectors';

import css from './HomePagePictures.module.css';

const HomePagePictures = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  // ************* carousel ******************
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImagesCount = 3;

  const nextSlide = () => {
    if (currentIndex < campers.length - visibleImagesCount) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // *****модальне вікно додаткової інформації****
  const [selectedCamper, setSelectedCamper] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleImageClick = camper => {
    setSelectedCamper(camper);
    setModalIsOpen(true);
    dispatch(updateModalIsActive(true));
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCamper(null);
    dispatch(updateModalIsActive(false));
  };
  // *******

  return (
    <div className={css.carouselContainer}>
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
            {campers
              .slice(currentIndex, currentIndex + visibleImagesCount)
              .map(camper => (
                <img
                  key={camper._id}
                  src={camper.gallery[0]}
                  alt={camper.name}
                  className={css.image}
                  onClick={() => handleImageClick(camper)}
                />
              ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className={css.rightArrow}
          disabled={currentIndex >= campers.length - visibleImagesCount}
        >
          <IoIosArrowForward size={40} />
        </button>
      </div>

      {modalIsOpen && (
        <CamperModalAdd
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          camper={selectedCamper}
        />
      )}
    </div>
  );
};

export default HomePagePictures;
