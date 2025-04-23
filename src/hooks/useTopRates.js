import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTION, topRatedMoviesURL } from '../Utils/Constants';
import { addTopRatedMovies } from '../Utils/Store/MovieSlice';

const useTopRates = () => {
  //Fetch data from TMDB API and update the state of store
  const dispatch = useDispatch();
  const getTopRatedMovies = async() =>{
    const data = await fetch(topRatedMoviesURL, API_OPTION);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }
  useEffect(()=>{
    getTopRatedMovies();
  },[])
}

export default useTopRates