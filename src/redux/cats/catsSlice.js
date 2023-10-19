import { createSlice } from '@reduxjs/toolkit';
import { fetchCats, fetchCatsByBreed } from './catsOperations';

export const allBreedsSlice = createSlice({
  name: 'breeds',
  initialState: { breeds: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: {
    //use without immer
    [fetchCats.fulfilled]: (state, action) => {
      return {
        ...state,
        breeds: action.payload,
        isLoading: false,
      };
    },
  },
  [fetchCats.pending]: (state, action) => {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  },

  [fetchCats.rejected]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  },
});

export const catByBreedSlice = createSlice({
  name: 'cats',
  initialState: { cats: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: {
    //use IMMER
    [fetchCatsByBreed.fulfilled]: (state, action) => {
          state.cats = action.payload
          state.isLoading = false
    },
  },
  [fetchCatsByBreed.pending]: (state, action) => {
      state.isLoading = true
      state.error = null
  },

  [fetchCatsByBreed.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
  },
});
