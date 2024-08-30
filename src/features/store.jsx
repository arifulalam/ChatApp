import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice";

const store = configureStore({
    reducer: {
        data: AppSlice,
    }
})

export default store;