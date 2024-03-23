import { useEffect, useState } from 'react';
import classes from './confirmDeleteModal.module.css'
import alertIcon from '../../assets/alert.svg';
import texts from '../../texts';
import Button from '../UI/Button/Button.tsx';
import ReactDOM from 'react-dom';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConfirmDeleteModal = ({ isOpen, onClose }: ConfirmModalProps) => {
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);
  const portalDiv = document.getElementById('portal') as HTMLElement;

  useEffect(() => {
    setDeleteButtonDisabled(true);
    const timerId = setTimeout(() => {
      setDeleteButtonDisabled(false);
    }, 2000);
    return () => clearTimeout(timerId);
  }, [isOpen]);

  const deleteHandler = () => {
    setDeleteButtonDisabled(true);
    onClose();
  }

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={deleteHandler} />
      <div className={classes.modalContainer}>
        <div>
          <img src={alertIcon} alt="Alert" />
          <h2 className={classes.title}>{texts.confirmDeleteModal.title}</h2>
        </div>
        <div>
          <p className={classes.description}>{texts.confirmDeleteModal.description}</p>
        </div>
        <div className={classes.buttonContainer}>
          <Button type="secondary" onClick={deleteHandler} >{texts.confirmDeleteModal.cancel}</Button>
          <Button type="primary" onClick={deleteHandler} disabled={deleteButtonDisabled}>{texts.confirmDeleteModal.delete}</Button>
        </div>
      </div>
    </>,
    portalDiv
  )
};

export default ConfirmDeleteModal;