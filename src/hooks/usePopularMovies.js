import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTION, nowPopularMovieURL } from '../Utils/Constants';
import { addPopularMovies } from '../Utils/Store/MovieSlice';

const usePopularMovies = () => {
  //Fetch data from TMDB API and update the state of store
  const dispatch = useDispatch();
  const getPopularMovies = async() =>{
    const data = await fetch(nowPopularMovieURL, API_OPTION);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }
  useEffect(()=>{
    getPopularMovies();
  },[])
}

export default usePopularMovies