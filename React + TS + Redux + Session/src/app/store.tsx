import { configureStore } from "@reduxjs/toolkit";
import countReducer from './stores/counterSlice';

export default configureStore({
  reducer: {
    counter: countReducer
  }
});