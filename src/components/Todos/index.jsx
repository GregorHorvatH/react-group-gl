import React, { useReducer, useMemo, useState } from 'react';
import { generate } from 'shortid';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const initialState = {
  items: [],
  filter: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'todos/increment':
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: generate(),
            text: lorem.generateWords(3),
          },
        ],
      };

    case 'todos/remove':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case 'filter/set':
      return {
        ...state,
        filter: action.payload.value,
      };

    default:
      return state;
  }
};

const Todos = () => {
  // const [todos, setTodos] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () =>
    dispatch({
      type: 'todos/increment',
      payload: {
        id: generate(),
        text: lorem.generateWords(3),
      },
    });

  const handleRemoveTodo = (id) =>
    dispatch({
      type: 'todos/remove',
      payload: { id },
    });

  const handleFilterChange = (e) => {
    dispatch({
      type: 'filter/set',
      payload: {
        value: e.target.value,
      },
    });
  };

  // const handleAddTodo = () =>
  //   setTodos((items) => [
  //     ...items,
  //     {
  //       id: generate(),
  //       text: lorem.generateWords(3),
  //     },
  //   ]);

  // const handleRemoveTodo = (id) =>
  //   setTodos((items) => items.filter((item) => item.id !== id));

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => setInputValue(e.target.value);

  const filteredItems = useMemo(() => {
    console.log('filter items');

    return state.items.filter((item) => item.text.includes(state.filter));
  }, [state.items, state.filter]);

  // const filteredItems = () => {
  //   console.log('filter items');

  //   return state.items.filter((item) => item.text.includes(state.filter));
  // };

  return (
    <div className="Todos">
      <h1>Todos</h1>

      <input type="text" value={inputValue} onChange={handleInputChange} />
      <br />

      <label>
        <span>Filter:</span>
        <input type="text" onChange={handleFilterChange} />
      </label>
      <br />

      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={() => handleRemoveTodo(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
