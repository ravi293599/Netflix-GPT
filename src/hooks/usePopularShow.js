import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTION, popularTvShowURL } from '../Utils/Constants';
import { addPopularShow } from '../Utils/Store/TVShowSlice';

const usePopularShow = () => {
  //TMDB Tv show list
  const dispatch = useDispatch();
  const getPopularShow = async() =>{
    const data = await fetch(popularTvShowURL, API_OPTION);
    const json = await data.json();
    dispatch(addPopularShow(json.results));
  }
  useEffect(()=>{
    getPopularShow()
  },[]);
}

export default usePopularShow