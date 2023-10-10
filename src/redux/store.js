import { configureStore, createSlice } from '@reduxjs/toolkit';

import { breedOptionsSlice } from './breedOptionsSlice';

const mySlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    bla(state, action) {
      return state + action.payload;
    },
    non(state, action) {
      return state - action.payload;
    },
    opa(state, action) {
      return state * action.payload;
    },
    tota(state, action) {
      return state / action.payload;
    },
  },
});

export const { bla, non, opa, tota } = mySlice.actions;

export const store = configureStore({
  reducer: {
    myValue: mySlice.reducer,
    breedOptions: breedOptionsSlice.reducer,
  },
});
