import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

export const blablabla = createAction('myValue/blabla');
export const nonono = createAction('myValue/nonono');
export const opa = createAction('myAnotherValue/opa');
export const tota = createAction('myAnotherValue/tota');

const myReducer = createReducer(100, {
  [blablabla]: (state, action) => state + action.payload,
  [nonono]: (state, action) => state - action.payload,
});

const myAnotherReducer = createReducer(500, {
  [opa]: (state, action) => state * action.payload,
  [tota]: (state, action) => state / action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
    myAnotherValue: myAnotherReducer,
  },
});
