import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light"
};

export const themeModeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
    setMode: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
  },
});

export const { setMode } = themeModeSlice.actions;

export default themeModeSlice.reducer;