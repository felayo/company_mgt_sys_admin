import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import themeModeReducer from "../features/theme/themeSlice";
import authReducer from "../features/auth/authSlice";
import { ApiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    theme: themeModeReducer,
    auth: authReducer,
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefault) => getDefault().concat(ApiSlice.middleware),
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV !== 'production'
});
setupListeners(store.dispatch);
