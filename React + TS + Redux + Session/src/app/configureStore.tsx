import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import counterSlice from './stores/counterSlice';

const ConfigureStore = () => {
  let intialState: any;
  let sessionValue = sessionStorage.getItem("counter");
  try {
    intialState = sessionValue ? JSON.parse(sessionValue) : {};
  } catch (error) {
    console.log('getError', error)
  }
  const saver = (store: any) => (next: any) => (action: any) => {
    let result = next(action);
    let stateToSave = store.getState();
    sessionStorage.setItem("counter", JSON.stringify({ ...stateToSave }))
    return result;
  }
  const rootReducer = combineReducers({
    counter: counterSlice,
  });

  return createStore(rootReducer, intialState, applyMiddleware(thunk, saver));

}
export default ConfigureStore;