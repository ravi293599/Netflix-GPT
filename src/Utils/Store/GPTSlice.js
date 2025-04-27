import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "GPTSlice",
    initialState: {
        GPTSearchView: false,
        GPTSearchValue:null,
        GPTMovies: null,
    },
    reducers: {
        toggleGPTSearchView : (state) =>{
            state.GPTSearchView = !state.GPTSearchView;
        },
        addSearchValue: (state,action) =>{
            state.GPTSearchValue = action.payload
        },
        addSearchedMovies: (state,action) =>{
            state.GPTMovies = action.payload;
        }
    }
})
export const {toggleGPTSearchView, addSearchedMovies, addSearchValue} = GPTSlice.actions;
export default GPTSlice.reducer;