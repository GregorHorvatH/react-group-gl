import React, { useState } from 'react';
import './styles.scss';

const Counter = () => {
  const [value, setValue] = useState(0);

  const onDecrement = () => setValue(value - 1);
  const onIncrement = () => setValue(value + 1);

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="controls">
        <button className="button" onClick={onDecrement}>
          -
        </button>
        <p className="value">{value}</p>
        <button className="button" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
