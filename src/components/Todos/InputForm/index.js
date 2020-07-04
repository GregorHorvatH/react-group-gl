import React, { useState } from 'react';
import './styles.scss';

const InputForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(value);
    setValue('');
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="button">+ Add</button>
    </form>
  );
};

export default InputForm;
