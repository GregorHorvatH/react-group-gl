import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import Todos from './components/Todos';

import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Counter options={[1, 5, 10, 15, 20, 50]} />
      <Todos />
    </div>
  </Provider>
);

export default App;
