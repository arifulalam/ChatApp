/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userData",
    initialState: {
        userLoggedIn: null,
    },
    reducers: {
        LoggedInUser: (state, action) => {
            state.userLoggedIn = action.payload;
        },
        LoggedOutUser: (state) => {
            state.userLoggedIn = null;
        }
    }
});

export const {LoggedInUser, LoggedOutUser} = userSlice.actions;
export default userSlice.reducer;