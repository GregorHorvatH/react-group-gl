import React from 'react';
import Todos from './components/Todos';
import Clock from './components/Clock';
// import News from './components/News';

const App = () => (
  <div className="todo-list">
    <Clock />
    <Todos />
    {/* <News /> */}
  </div>
);

export default App;
