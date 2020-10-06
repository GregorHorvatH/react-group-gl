import { configureStore } from '@reduxjs/toolkit';
import session from './session/sessionReducer';

const store = configureStore({
  reducer: {
    session,
  },
});

export default store;
