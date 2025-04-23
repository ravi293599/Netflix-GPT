import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTION, trendingMoviesURL } from '../Utils/Constants';
import { addTrendingMovies } from '../Utils/Store/MovieSlice';

const useTrendingMovies = () => {
  //Fetch data from TMDB API and update the state of store
  const dispatch = useDispatch();
  const getPopularMovies = async() =>{
    const data = await fetch(trendingMoviesURL, API_OPTION);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  }
  useEffect(()=>{
    getPopularMovies();
  },[])
}

export default useTrendingMovies