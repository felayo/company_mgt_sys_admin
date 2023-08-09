import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark"
};

export const themeModeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = themeModeSlice.actions;

export default themeModeSlice.reducer;