import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState('');

  const handleIncrement = () => setValue((value) => value + 1);
  const handleFilterChange = (e) => setFilter(e.target.value);

  useEffect(() => {
    console.log(`Value is ${value}`);
    document.title = `Value is ${value}`;
  }, [value]);

  useEffect(() => {
    console.log(`filter is ${filter}`);
  }, [filter]);

  return (
    <div className="counter">
      <h1>Counter</h1>
      <button onClick={handleIncrement}>+ plus</button>
      <p>{value}</p>

      <label>
        <span>filter</span>
        <input type="text" value={filter} onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default Counter;
