import { combineReducers, createReducer } from '@reduxjs/toolkit';
// import * as catsActions from './catsActions';
import { fetchCatsByBreed } from './catsOperations';

const cats = createReducer([], {
  [fetchCatsByBreed.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [fetchCatsByBreed.pending]: () => true,
  [fetchCatsByBreed.fulfilled]: () => false,
  [fetchCatsByBreed.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchCatsByBreed.rejected]: (_, action) => action.payload,
  [fetchCatsByBreed.pending]: () => null,
});
export default combineReducers({
  cats,
  isLoading,
  error,
});
