import Modal from 'react-modal';
import sprite from '../../assets/icons/icons.svg';
import { useEffect } from 'react';
import './ModalComponent.css';

const ModalComponent = ({ isOpen, closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => closeModal()}
      className="modal-content"
      overlayClassName="modal-overlay"
      contentLabel="Example Modal"
    >
      <button onClick={closeModal} className="close-button">
        <svg className="iconOption" width="32" height="32">
          <use href={`${sprite}#icon-close`} />
        </svg>
      </button>

      {children}
    </Modal>
  );
};

export default ModalComponent;
