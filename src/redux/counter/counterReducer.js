import { combineReducers } from 'redux';
import types from './counterTypes';

const initialState = {
  value: 5,
  step: 1,
};

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case types.INCREMENT:
//       return {
//         ...state,
//         value: state.value + action.payload.step,
//       };

//     case types.DECREMENT:
//       return {
//         ...state,
//         value:
//           state.value - action.payload.step < 0
//             ? state.value
//             : state.value - action.payload.step,
//       };

//     case types.SET_STEP:
//       return {
//         ...state,
//         step: action.payload.value,
//       };

//     default:
//       return state;
//   }
// };

const valueReducer = (state = initialState.value, { type, payload }) => {
  switch (type) {
    case types.INCREMENT:
      return state + payload.step;

    case types.DECREMENT:
      return state - payload.step < 0 ? state : state - payload.step;

    default:
      return state;
  }
};

const stepReducer = (state = initialState.step, { type, payload }) => {
  switch (type) {
    case types.SET_STEP:
      return payload.value;

    default:
      return state;
  }
};

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
