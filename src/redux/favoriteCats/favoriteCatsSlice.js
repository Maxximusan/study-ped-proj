//я не уверен что isLiked тут нужен вообще и что он нужен для пендинга и реджектеда при добавлении котов
import { createSlice } from '@reduxjs/toolkit';

import {
  getAllLikedCats,
  addLikeCat,
  deleteLikedCat,
} from './favoriteCatsOperations';

const initialState = {
  allFavoriteCats: [],
  isLiked: false,
  error: null,
  isLoading: false,
};

export const FavoriteCatsSlice = createSlice({
  name: 'favoriteCats',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllLikedCats.pending, (state, action) => {
        state.isLiked = true;
        state.isLoading = true;
      })
      .addCase(getAllLikedCats.fulfilled, (state, action) => {
        state.allFavoriteCats = action.payload;
        state.isLiked = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAllLikedCats.rejected, (state, action) => {
        state.isLiked = true;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addLikeCat.pending, (state, action) => {
        state.isLiked = false;
        state.isLoading = true;
      })
      .addCase(addLikeCat.fulfilled, (state, action) => {
        state.allFavoriteCats.push(action.payload);
        state.isLiked = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addLikeCat.rejected, (state, action) => {
        state.isLiked = false;
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteLikedCat.pending, (state, action) => {
        state.isLiked = true;
        state.isLoading = true;
      })
      .addCase(deleteLikedCat.fulfilled, (state, action) => {
        state.allFavoriteCats = state.allFavoriteCats.filter(
          cat => cat._id !== action.payload._id
        );
        state.isLiked = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deleteLikedCat.rejected, (state, action) => {
        state.isLiked = true;
        state.error = action.payload;
        state.isLoading = false;
      }),
});
