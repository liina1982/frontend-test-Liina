import { useState } from 'react';
import classes from './App.module.css';
import ConfirmDeleteModal from './components/ConfirmDeleteModal/ConfirmDeleteModal.tsx';
import texts from './texts.ts';
import Button from './components/UI/Button/Button.tsx';


export function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModalOpen = () => {
    setIsOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  // For better user experience make content under the modal unscrollable
  if (isOpen) {
    document.body.classList.add(classes.activeModal);
  } else {
    document.body.classList.remove(classes.activeModal);
  }

  return (
    <>
      <div className={classes.content}>
        <Button type='primary' className={classes.button} onClick={toggleModalOpen}>{texts.app.buttonText}</Button>
        <ConfirmDeleteModal isOpen={isOpen} onClose={toggleModalOpen} />
      </div>
    </>
  );
}

export default App;