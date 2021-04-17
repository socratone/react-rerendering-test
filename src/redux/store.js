import { configureStore } from '@reduxjs/toolkit';
import reduxReducer from './reduxSlice';

export default configureStore({
  reducer: {
    redux: reduxReducer,
  },
});
