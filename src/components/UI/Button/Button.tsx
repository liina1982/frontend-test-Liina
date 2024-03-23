import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  type: 'primary' | 'secondary';
    className?: string,
    children: React.ReactNode | string;
    onClick?: () => void,
    disabled?: boolean,
}

const Button: React.FC<ButtonProps> = ({ children, type, className, onClick, disabled }) => {
    return (
      <button className={`${classes.button} ${classes[type]} ${className} ${disabled && classes.disabled}`} onClick={onClick} disabled={disabled}>
         {children}
      </button>
      );
  }
  
  export default Button;
