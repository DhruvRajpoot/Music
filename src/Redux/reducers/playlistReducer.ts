import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice= createSlice({
    name: "playlist",
    initialState:{
        userPlaylist:[],
        featuredPlaylist:[],
        recentPlaylist:[]
    },
    reducers: {
        getUserPlaylist: (state, action) => {
            state.userPlaylist = action.payload
        },
        getFeaturedPlaylist: (state, action) => {
            state.featuredPlaylist = action.payload
        },
        getRecommededPlaylist: (state, action) => {
            state.recentPlaylist = action.payload
        },
    }
})

export const { getUserPlaylist, getFeaturedPlaylist, getRecommededPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;