// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setAuthInfo: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user; //now setting the whole user object
    },
  },
});

export const { setAuthInfo } = authSlice.actions;

export default authSlice.reducer;
