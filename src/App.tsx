import { useState } from 'react';
import classes from './App.module.css';
import ConfirmDeleteModal from './components/ConfirmDeleteModal'
import Button from './components/UI/Button';
import texts from './texts.ts';


export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  return (
      <div>
        <div className={classes.content}>
        <Button type='primary' className={classes.button} onClick={toggleModalOpen}>{texts.app.buttonText}</Button>
        {isModalOpen && (
          <ConfirmDeleteModal onClose={toggleModalOpen} />
        )}
        </div>
      </div>
  );
}

export default App;