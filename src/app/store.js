import { configureStore } from "@reduxjs/toolkit"
import themeModeReducer from "../features/theme/themeSplice"

export const store = configureStore({
    reducer: {
        theme: themeModeReducer,
    }
});