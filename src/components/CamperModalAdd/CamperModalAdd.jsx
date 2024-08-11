import React from 'react';
import ModalComponent from '../ModalComponent/ModalComponent.jsx';
import CamperModal from '../CamperModal/CamperModal.jsx';

const CamperModalAdd = ({ isOpen, closeModal, camper }) => {
  return (
    <ModalComponent isOpen={isOpen} closeModal={closeModal}>
      <CamperModal camper={camper} isOpen={isOpen} />
    </ModalComponent>
  );
};

export default CamperModalAdd;
