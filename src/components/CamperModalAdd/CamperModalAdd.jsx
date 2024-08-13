import React from 'react';
import ModalComponent from '../ModalComponent/ModalComponent.jsx';
import CamperModal from '../CamperModal/CamperModal.jsx';

const CamperModalAdd = ({ modalIsOpen, closeModal, camper }) => {
  return (
    <ModalComponent isOpen={modalIsOpen} closeModal={closeModal}>
      <CamperModal camper={camper} />
    </ModalComponent>
  );
};

export default CamperModalAdd;
