import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION, nowPlayingMovieURL } from "../Utils/Constants";
import { addNowPlayingMovies } from "../Utils/Store/MovieSlice";

const useNowPlayingMovie = () =>{
    //Fetch data from TMDB API and update the state of store
    const dispatch = useDispatch();
    const getNowPlayingMovies = async() =>{
      const data = await fetch(nowPlayingMovieURL, API_OPTION);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}
export default useNowPlayingMovie