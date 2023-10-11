import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  chosenCat: '',
  isLiked: false,
  breedAndChosenCat: '',
  all: [],
};

const likedCatSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    takeChosenCat(state, action) {
      state.chosenCat = action.payload;
    },
    takeIsLiked(state, action) {
      state.isLiked = action.payload;
    },
    takeBreedAndChosenCat(state, action) {
      state.breedAndChosenCat = action.payload;
    },
    takeAll(state, action) {
      state.all.push(action.payload);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedLikeCatReducer = persistReducer(
  persistConfig,
  likedCatSlice.reducer
);

export const { takeChosenCat, takeIsLiked, takeBreedAndChosenCat, takeAll } =
  likedCatSlice.actions;

// SELECTORS
export const getChosenCat = state => state.like.chosenCat;
export const getLiked = state => state.like.isLiked;
export const getBreedAndChosenCat = state => state.like.breedAndChosenCat;
export const getAll = state => state.like.all;
