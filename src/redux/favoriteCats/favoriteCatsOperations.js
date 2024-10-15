
import { createAsyncThunk } from '@reduxjs/toolkit';
import { myBackEnd } from '../auth/authOperations';

export const getAllLikedCats = createAsyncThunk(
  'favoriteCats/fetchCats',
  async (_, thunkAPI) => {
    try {
      const result = await myBackEnd.get('/api/favoriteCats');
      // console.log(result);

      return result.data.favoriteCats;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addLikeCat = createAsyncThunk(
  'favoriteCats/addCat',
  async (cat, thunkAPI) => {
    try {
      const result = await myBackEnd.post('/api/favoriteCats', cat);
      // console.log(result.data);
      return result.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteLikedCat = createAsyncThunk(
  'favoriteCats/deleteCat',
  async (catId, thunkAPI) => {
    try {
      const result = await myBackEnd.delete(`/api/favoriteCats/${catId}`);
      // console.log(result);
      return result.data.necessaryCat;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
