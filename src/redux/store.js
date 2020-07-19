import { configureStore } from '@reduxjs/toolkit';
import session from '../redux/sessionReducer';

const store = configureStore({
  reducer: {
    session,
  },
});

export default store;
