import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movieData = useSelector(store => store.movies);
  const showData = useSelector(store => store.TVshows);
  console.log(movieData.popularTVServies);
  return (
    <div className='p-10 bg-black text-white'>
      {
        movieData && 
        <div className='-mt-52 relative z-20'>
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