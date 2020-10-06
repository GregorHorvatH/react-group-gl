import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

const Status = ({ value, step, count }) => {
  console.log('render status');

  return (
    <div className="status">
      <h2 className="title">Status</h2>

      <h3 className="subtitle">Counter</h3>
      <p>value: {value}</p>
      <p>step: {step}</p>

      <h3 className="subtitle">Todos</h3>
      <p>count: {count}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: state.counter.value,
  step: state.counter.step,
  // items: state.todos.items,
  count: state.todos.items.length,
});

export default connect(mapStateToProps)(Status);
