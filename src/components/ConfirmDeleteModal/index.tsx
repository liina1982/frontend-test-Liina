import { useEffect, useState } from "react";
import classes from './ConfirmDeleteModal.module.css';
import Button from "../UI/Button";
import alertIcon from '../../assets/alert.svg';
import texts from '../../texts.ts';
import Card from "../Card/Card.tsx";

const ConfirmDeleteModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);
  
  useEffect(() => {
    setDeleteButtonDisabled(true);
    const timerId = setTimeout(() => {
      setDeleteButtonDisabled(false);
    }, 2000);
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, []);

  return (
    <div className={classes.modalContainer}>
      <div className={classes.backdrop} onClick={onClose} />
      <Card className={classes.modal}>
        <header>
          <img src={alertIcon} alt="Alert" />
          <h2 className={classes.title}>{texts.confirmDeleteModal.title}</h2>
        </header>
        <main>
          <p className={classes.supportingText}>{texts.confirmDeleteModal.description}</p>
        </main>
        <footer className={classes.buttonContainer}>
          <Button type="secondary" className="classes.cancleButton" onClick={onClose} disabled={deleteButtonDisabled}>{texts.confirmDeleteModal.cancel}</Button>
          <Button type="primary" className="classes.deleteButton" onClick={onClose} disabled={deleteButtonDisabled}>{texts.confirmDeleteModal.delete}</Button>
        </footer>
      </Card>
    </div>
  )
};

export default ConfirmDeleteModal

//<Button type="secondary" onClick={onClose} disabled={deleteButtonDisabled}>Cancel</Button>
//<Button type="primary" onClick={onClose} disabled={deleteButtonDisabled}>Delete</Button>