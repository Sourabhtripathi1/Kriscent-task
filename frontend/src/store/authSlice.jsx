import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = { user: {} };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      console.log(action.payload);

      state.user = action.payload;

      console.log(state.user);
    },
    login: (state, action) => {
      console.log(action.payload);

      state.user = action.payload;

      console.log(state.user);
    },
    logout: (state, action) => {
      state.user = {};

      window.location.href = "/";
    },
  },
});

export const { signUp, login, logout } = authSlice.actions;

export default authSlice.reducer;
