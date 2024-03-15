import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const el = document.createElement('div');

  useEffect(() => {
    if (!modalRoot) return;

    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.modal}>{children}</div>
    </>,
    el
  );
};

export default Modal;
