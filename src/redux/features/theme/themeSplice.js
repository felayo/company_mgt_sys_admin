import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "64bf8f6ee16f765605bb8351",
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