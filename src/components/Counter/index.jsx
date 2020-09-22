import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../../redux/counter/counterActions';
import './style.scss';

const Counter = ({
  options,
  value,
  step,
  onIncrement,
  onDecrement,
  onSetStep,
}) => (
  <div className="counter">
    <div className="value">
      <button onClick={() => onDecrement(step)}>-</button>
      <span>{value}</span>
      <button onClick={() => onIncrement(step)}>+</button>
    </div>
    <select onChange={(e) => onSetStep(Number(e.target.value))} value={step}>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);

const mapStateToProps = (state) => ({
  value: state.counter.value,
  step: state.counter.step,
});

// const mapDispatchToProps = (dispatch) => ({
//   onIncrement: (step) => dispatch(counterActions.onIncrement(step)),
//   onDecrement: (step) => dispatch(counterActions.onDecrement(step)),
//   onSetStep: (value) => dispatch(counterActions.onSetStep(value)),
// });

const mapDispatchToProps = {
  onIncrement: counterActions.onIncrement,
  onDecrement: counterActions.onDecrement,
  onSetStep: counterActions.onSetStep,
};

// const mapDispatchToProps = {
//   onIncrement,
//   onDecrement,
//   onSetStep,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
