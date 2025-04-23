import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name: "ConfigSlice",
    initialState: {
        siteLanguage: "en"
    },
    reducers: {
        changeLanguage: (state, action) =>{
            state.siteLanguage = action.payload;
        }
    }
})
export const {changeLanguage} = ConfigSlice.actions;
export default ConfigSlice.reducer;