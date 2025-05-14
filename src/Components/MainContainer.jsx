import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoDesc from './VideoDesc';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return ;
    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;
  return (
    <>
    <div className="w-full h-[440px] lg:h-[650px]">
      <VideoBackground movie_id={id} />
      <VideoDesc title={original_title} overview={overview} />
    </div>
    </>
  )
}

export default MainContainer