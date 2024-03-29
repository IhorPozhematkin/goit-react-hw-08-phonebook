import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, CloseButton, ModalContainer } from './Modal.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal }) => {
  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleCloseByEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  }, [closeModal]);

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <ModalContainer>
        <CloseButton
          type="button"
          aria-label="Close window"
          onClick={closeModal}
        >
          Close
        </CloseButton>
        <ContactForm closeModal={closeModal} />
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};
