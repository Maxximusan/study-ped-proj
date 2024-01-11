import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk(
    'auth/register',
    async (credentials) => {
      try {
        const res = await axios.post('/users/signup', credentials);
        // After successful registration, add the token to the HTTP header
        
        console.log(res.data);
        return res.data;
      } catch (error) {
        
      }
    }
  );


  export const login = createAsyncThunk(
    'auth/login',
    async (credentials) => {
      try {
        const res = await axios.post('/users/login', credentials);
        // After successful registration, add the token to the HTTP header
        
        console.log(res.data);
        return res.data;
      } catch (error) {
        
      }
    }
  );

  export const logOut = createAsyncThunk(
    'auth/logout',
    async () => {
      try {
        const res = await axios.post('/users/logout');
        // After successful registration, add the token to the HTTP header
        
        console.log(res.data);
        return res.data;
      } catch (error) {
        
      }
    }
  );