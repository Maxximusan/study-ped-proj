import { createSlice } from '@reduxjs/toolkit';
import { registerR, login, logOut, refreshCurrentUser } from 'redux/auth/authOperations'


const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
      [registerR.fulfilled](state, action){
        state.user = action.payload.user;
        state.token = action.payload.token
        state.isLoggedIn = true
      },
      [login.fulfilled](state, action){
        state.user = action.payload.user;
        state.token = action.payload.token
        state.isLoggedIn = true
      },
      [logOut.fulfilled](state, action){
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      },
      [refreshCurrentUser.fulfilled](state, action){
        state.user = action.payload
        state.isLoggedIn = true
        state.isRefreshing = false;
      },
      [refreshCurrentUser.pending](state){
              state.isRefreshing = true;
            },
            [refreshCurrentUser.rejected](state){
              state.isRefreshing = false;
            },
    }
  })

  export default authSlice.reducer