import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Slices/appSlice";
import userSlice from "./Slices/userSlice";

const store = configureStore({
    reducer: {
        app: AppSlice,
        user: userSlice,
    }
})

export default store;