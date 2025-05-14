import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movieData = useSelector(store => store.movies);
  const showData = useSelector(store => store.TVshows);
  return (
    <div className='p-4 bg-black text-white lg:p-10'>
      {
        movieData && 
        <div className='relative flex flex-col gap-2 lg:gap-3 z-20 lg:-mt-52'>
        <MovieList title="Now Playing Movies" movies={movieData.nowPlayingMovies} />
        <MovieList title="Most Popular Movies" movies={movieData.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movieData.topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={movieData.upcomingMovies} />
        <MovieList title="Trending Movies" movies={movieData.trendingMovies} />
        <MovieList title="Popular TV Shows" movies={showData.popularTVServies} />
        </div>
      }
    </div>
  )
}

export default SecondaryContainer