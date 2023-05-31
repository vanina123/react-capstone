import { configureStore } from '@reduxjs/toolkit';
import apiReducer from '../redux/API/apiSlice';

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;