import { createSlice } from "@reduxjs/toolkit";

const TVShowSlice = createSlice({
    name: "TV List",
    initialState: {
        popularTVServies: null
    },
    reducers: {
        addPopularShow : (state,action) =>{
            state.popularTVServies = action.payload;
        }
    }
})
export const {addPopularShow} = TVShowSlice.actions;
export default TVShowSlice.reducer;