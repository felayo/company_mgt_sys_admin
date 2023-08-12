import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query";
import themeModeReducer from "../features/theme/themeSplice"
import { AdminApiSlice } from "./api/api";

export const store = configureStore({
    reducer: {
        theme: themeModeReducer,
        [AdminApiSlice.reducerPath]: AdminApiSlice.reducer,
    },
    middleware: (getDefault) => getDefault().concat(AdminApiSlice.middleware),
});
setupListeners(store.dispatch);
