import { createSlice } from "@reduxjs/toolkit";

export const FavoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favorite: []
    },
    reducers: {
        getFavorite: (state, action) => {
            state.favorite = action.payload
        }
    }
});

export const { getFavorite } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;