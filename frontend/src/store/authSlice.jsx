import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { user: {} };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      console.log(action.payload);

      state.user = action.payload.user;
    },
    login: (state, action) => {
      console.log(action.payload);

      state.user = action.payload.user;
    },
    logout: (state, action) => {
      state.user = {};

      axios
        .get(`${process.env.REACT_APP_BACKEND_URI}/api/auth/logout`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      window.location.href = "/";
    },
  },
});

export const { signUp, login, logout } = authSlice.actions;

export default authSlice.reducer;
