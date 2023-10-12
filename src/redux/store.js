import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { persistedLikeCatReducer } from './likedCatSlice';
import { breedOptionsSlice } from './breedOptionsSlice';
import catsReducer from './cats/catsReducer';

export const store = configureStore({
  reducer: {
    breedOptions: breedOptionsSlice.reducer,
    like: persistedLikeCatReducer,
    cats: catsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
