import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: null,
    reducers:{
        addUser: (state, action) =>{
            return action.payload;
        },
        removeUser: () =>{
            return null;
        }
    }
})
export default UserSlice.reducer
export const {addUser, removeUser} = UserSlice.actions