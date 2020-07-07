import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

const Status = ({ counter, todos }) => {
  return (
    <div className="status">
      <h2 className="title">Status</h2>

      <h3 className="subtitle">Counter</h3>
      <p>value: {counter.value}</p>
      <p>step: {counter.step}</p>

      <h3 className="subtitle">Todos</h3>
      <p>count: {todos.items.length}</p>
    </div>
  );
};

const mapStateToProps = ({ counter, todos }) => ({
  counter,
  todos,
});

export default connect(mapStateToProps)(Status);
