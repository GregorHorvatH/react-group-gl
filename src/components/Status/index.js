import React from 'react';
import './styles.scss';

const Status = () => {
  return (
    <div className="status">
      <h2 className="title">Status</h2>

      <h3 className="subtitle">Counter</h3>
      <p>value: 0</p>
      <p>step: 0</p>

      <h3 className="subtitle">Todos</h3>
      <p>count: 0</p>
    </div>
  );
};

export default Status;
