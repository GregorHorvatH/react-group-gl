import { configureStore } from '@reduxjs/toolkit';
import counter from './counter/counterReducer';

const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
