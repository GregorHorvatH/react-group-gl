import React, { useState } from 'react';

const NewsForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(text);
  };

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <label>
        <span>Enter text</span>
        <input type="text" value={text} onChange={handleChangeInput} />
      </label>
    </form>
  );
};

export default NewsForm;
