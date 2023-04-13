import { createSlice } from "@reduxjs/toolkit";
import useAxios from "../../utils/useAxios";

const api=useAxios();
export const UserSlice = createSlice({
    name: "user",
    initialState:{
        user:{}
    },
    
    reducers: {
        getUserDetails: (state,action)=>{
            state.user=action.payload;
        }
    }
});

export const { getUserDetails } = UserSlice.actions;

export default UserSlice.reducer;