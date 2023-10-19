import { createAsyncThunk } from '@reduxjs/toolkit';

import * as catsAPI from 'Api/catApi';

export const fetchCats = createAsyncThunk(
  'breedsCats/fetchCats',
  async (_, thunkAPI) => {
    try {
      const cats = await catsAPI.getBreedsCats();
      return cats;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchCatsByBreed = createAsyncThunk(
  'cats/fetchByBreed',
  async (breed, { rejectWithValue }) => {
    try {
      const catsByBreed = await catsAPI.getCatsByBreed(breed);
      return catsByBreed;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
