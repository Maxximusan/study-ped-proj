import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { breedOptionsSlice } from './breedOptionsSlice';
import { allBreedsSlice, catByBreedSlice } from './cats/catsSlice';
import { FavoriteCatsSlice } from './favoriteCats/favoriteCatsSlice';
import Auth from 'redux/auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    breedOptions: breedOptionsSlice.reducer,
    breedsCats: allBreedsSlice.reducer,
    catsByBreed: catByBreedSlice.reducer,
    auth: persistReducer(authPersistConfig, Auth),
    favoriteCats: FavoriteCatsSlice.reducer,
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
