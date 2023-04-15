import { createSlice } from "@reduxjs/toolkit";

export const favouriteSlice = createSlice({
    name: "favourite",
    initialState: {
        favourite: []
    },
    reducers: {
        getfavourite: (state, action) => {
            state.favourite = action.payload
        }
    }
});

export const { getfavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;