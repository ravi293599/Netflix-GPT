import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION, upcomingMoviesURL } from '../Utils/Constants';
import { addUpcomingMovies } from '../Utils/Store/MovieSlice';

const useUpcomingMovies = () => {
 //Fetch data from TMDB API and update the state of store
 const dispatch = useDispatch();
 const getUpcomingMovies = async () =>{
    const data = await fetch(upcomingMoviesURL, API_OPTION);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results))
 }
 useEffect(()=>{
    getUpcomingMovies();
 },[])
}

export default useUpcomingMovies