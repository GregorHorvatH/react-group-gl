import types from './todosTypes';

const initialState = {
  items: [
    {
      id: 1,
      text: 'do something',
    },
  ], // todos list
};

const todosRreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_TODO:
      return {
        ...state,
        items: [...state.items, payload.item],
      };

    case types.DELETE_TODO:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };

    default:
      return state;
  }
};

export default todosRreducer;
