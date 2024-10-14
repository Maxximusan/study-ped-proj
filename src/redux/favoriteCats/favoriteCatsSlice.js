import { createSlice } from '@reduxjs/toolkit';

import {
  getAllLikedCats,
  addLikeCat,
  deleteLikedCat,
} from './favoriteCatsOperations';

const initialState = {
  allFavoriteCats: [],
  error: null,
  isLoading: false,
};

export const FavoriteCatsSlice = createSlice({
  name: 'favoriteCats',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllLikedCats.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllLikedCats.fulfilled, (state, action) => {
        state.allFavoriteCats = action.payload;
        state.isLiked = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getAllLikedCats.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(addLikeCat.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addLikeCat.fulfilled, (state, action) => {
        state.allFavoriteCats.push(action.payload);

        state.error = null;
        state.isLoading = false;
      })
      .addCase(addLikeCat.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteLikedCat.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteLikedCat.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;

        state.allFavoriteCats = state.allFavoriteCats.filter(
          cat => cat._id !== action.payload._id
        );
      })
      .addCase(deleteLikedCat.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});
