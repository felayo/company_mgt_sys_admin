import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "64bf8f6ee16f765605bb8351",
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    setToken: (state, action) => {
      state.token = action.payload;
      sessionStorage.setItem("token", action.payload);
      return state;
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setToken, setCredentials, logout } = AuthSlice.actions;

export default AuthSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
