import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "64bf8f6ee16f765605bb8351",
  token: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload
      state.token = token
      // state.token = action.payload;
    },
    logout: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = AuthSlice.actions;

export default AuthSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
