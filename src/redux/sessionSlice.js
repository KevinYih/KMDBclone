// sessionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  // token: null,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      // state.token = action.payload.token;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      // state.token = null;
    },
  },
});

export const { login, logout } = sessionSlice.actions;
export default sessionSlice.reducer;
