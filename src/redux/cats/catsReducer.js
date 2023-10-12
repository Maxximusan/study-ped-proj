import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as catsActions from './catsActions';

const enteties = createReducer([], {
  [catsActions.fetchCatsSuccess]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [catsActions.fetchCatsRequest]: () => true,
  [catsActions.fetchCatsSuccess]: () => false,
  [catsActions.fetchCatsError]: () => false,
});

const error = createReducer(null, {
  [catsActions.fetchCatsError]: (_, action) => action.payload,
  [catsActions.fetchCatsRequest]: () => null,
});
export default combineReducers({
  enteties,
  isLoading,
  error,
});
