import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { user: {}, authToken: "" };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp:  (state, action) => {
      console.log(action.payload);
      
      state.user = action.payload.user;
      state.authToken = action.payload.auth;
    },
    login: (state, action) => {
      console.log(action.payload);

      state.user = action.payload.user;
      state.authToken = action.payload.auth;
    },
    logout: (state, action) => {
      state.user = {};
      state.authToken=""

      window.location.href = "/";
    },
  },
});

export const { signUp, login, logout } = authSlice.actions;

export default authSlice.reducer;
