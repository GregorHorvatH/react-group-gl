import React, { useState } from 'react';
import './styles.scss';

const options = [5, 10, 15, 50];

const Counter = () => {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(options[0]);

  const onDecrement = () => setValue(value - step);
  const onIncrement = () => setValue(value + step);
  const onSetStep = (value) => setStep(Number(value));

  return (
    <div className="counter">
      <h2 className="title">Counter</h2>
      <div className="controls">
        <button className="button" onClick={onDecrement}>
          -
        </button>
        <p className="value">{value}</p>
        <button className="button" onClick={onIncrement}>
          +
        </button>
      </div>

      <select
        className="step"
        value={step}
        onChange={(e) => onSetStep(e.target.value)}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Counter;
