import React, { useState } from 'react';
import { LuEuro } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import sprite from '../../assets/icons/icons.svg';
import BoxOption from '../BoxOption/BoxOption';
import { updateModalIsActive } from '../../redux/modalSlice';
import CamperModalAdd from '../CamperModalAdd/CamperModalAdd';

import css from './CamperItem.module.css';

const CamperItem = ({ camper, toggleHeartClick, isFavorite }) => {
  const dispatch = useDispatch();

  const { name, price, rating, location, description, gallery, reviews } =
    camper;

  const id = camper._id;

  // *****модальне вікно додаткової інформації****
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
    dispatch(updateModalIsActive(true));
  };
  const closeModal = () => {
    setModalIsOpen(false);
    dispatch(updateModalIsActive(false));
  };
  // *******

  return (
    <div>
      <div className={css.camperContainer}>
        <div className={css.camperContext}>
          <div className={css.titleInf}>
            <div className={css.titlePrice}>
              <h2 className={css.title}>{name}</h2>

              <div className={css.priceHeartWrap}>
                <h2 className={css.price}>
                  <LuEuro />
                  {price.toFixed(2)}
                </h2>

                <button
                  className={css.heartBtn}
                  onClick={() => {
                    toggleHeartClick(camper);
                  }}
                >
                  <svg
                    className={`${css.heart} ${
                      isFavorite ? css.redHeart : css.whiteHeart
                    }`}
                    width="24"
                    height="24"
                  >
                    <use href={`${sprite}#icon-heart`} />
                  </svg>
                </button>
              </div>
            </div>

            <div className={css.ratingLocation}>
              <p className={css.rating}>
                {rating} ({reviews.length} Reviews)
              </p>

              <p className={css.location}> {location}</p>
            </div>
          </div>

          <p className={css.additionalInf}>{description}</p>

          <div className={css.optionsInf}>
            <BoxOption camper={camper} />
          </div>

          <CamperModalAdd
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            camper={camper}
          />
        </div>

        <div className={css.imgBtnWrap}>
          <div className={css.imgContainer}>
            <img
              src={gallery[0]}
              alt="camper photo"
              width={290}
              // height={310}
              loading="lazy"
            />
          </div>

          <button type="button" className="btn red" onClick={openModal}>
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default CamperItem;
