import { configureStore, createSlice } from '@reduxjs/toolkit';

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
// export const blablabla = createAction('myValue/blabla');
// export const nonono = createAction('myValue/nonono');
// export const opa = createAction('myAnotherValue/opa');
// export const tota = createAction('myAnotherValue/tota');

// const myReducer = createReducer(100, {
//   [blablabla]: (state, action) => state + action.payload,
//   [nonono]: (state, action) => state - action.payload,
// });

// const myAnotherReducer = createReducer(500, {
//   [opa]: (state, action) => state * action.payload,
//   [tota]: (state, action) => state / action.payload,
// });

export const store = configureStore({
  reducer: {
    myValue: mySlice.reducer,
    // myAnotherValue: myAnotherReducer,
  },
});
