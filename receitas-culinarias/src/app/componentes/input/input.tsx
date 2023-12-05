import React from 'react';
import styles from './input.module.css'


const Input = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} {...props} />;
};

export default Input;




