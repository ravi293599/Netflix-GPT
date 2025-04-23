import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice"
import MoviesReducer from "./MovieSlice"
import TVShowReducer from "./TVShowSlice"
import GPTReducer from "./GPTSlice"
import ConfigReducer from "./ConfigSlice"

const AppStore = configureStore({
    reducer: {
        user: UserReducer,
        config: ConfigReducer,
        movies: MoviesReducer,
        TVshows: TVShowReducer,
        GPT: GPTReducer
    }
})
export default AppStore