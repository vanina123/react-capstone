import { createStore, applyMiddleware } from 'redux';
import { compose } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { displaySlice } from './Display/displaySlice';
import { homeSlice } from './HomeDisplay/homeSlice';

const rootReducer = combineReducers({
  details: displaySlice.reducer,
  character: homeSlice.reducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk)),
);

export default store;