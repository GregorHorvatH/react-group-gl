import React from 'react';
import styles from './styles.module.scss';

const Form = () => {
  return (
    <form className={styles.inputForm}>
      <label className={styles.label}>
        <span>Enter text</span>
        <input className={styles.input} type="text" />
      </label>

      <button className="button">+ Add</button>
    </form>
  );
};

export default Form;
