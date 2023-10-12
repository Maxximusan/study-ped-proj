import { combineReducers, createReducer } from '@reduxjs/toolkit';
// import * as catsActions from './catsActions';
import { fetchCats } from './catsOperations';

const breeds = createReducer([], {
  [fetchCats.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchCats.pending]: () => true,
  [fetchCats.fulfilled]: () => false,
  [fetchCats.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchCats.rejected]: (_, action) => action.payload,
  [fetchCats.pending]: () => null,
});
export default combineReducers({
  breeds,
  isLoading,
  error,
});
