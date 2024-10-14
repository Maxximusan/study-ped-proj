import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const myBackEnd = axios.create({
  baseURL: 'https://back-for-phonebook-and-findcats.onrender.com',
});

// Utility to add JWT
const setToken = token => {
  myBackEnd.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearToken = () => {
  myBackEnd.defaults.headers.common.Authorization = '';
};

export const registration = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await myBackEnd.post('/api/users/signup', credentials);

      // After successful registration, add the token to the HTTP header
      setToken(res.data.data.token);

      // console.log(res.data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await myBackEnd.post('/api/users/login', credentials);

      // After successful login, add the token to the HTTP header
      setToken(res.data.token);

      // console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await myBackEnd.get('/api/users/logout');

    // After successful logout, clear the token from the HTTP header
    clearToken();

    // console.log(res.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    // console.log(thunkApi.getState());

    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    // console.log(persistedToken);
    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {
      // If there is a token, add it to the HTTP header and perform the request
      setToken(persistedToken);
      const res = await myBackEnd.get('/api/users/user/current');

      return res.data.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
