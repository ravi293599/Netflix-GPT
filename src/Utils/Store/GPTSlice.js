import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "GPTSlice",
    initialState: {
        GPTSearchView: false
    },
    reducers: {
        toggleGPTSearchView : (state) =>{
            state.GPTSearchView = !state.GPTSearchView;
        }
    }
})
export const {toggleGPTSearchView} = GPTSlice.actions;
export default GPTSlice.reducer;