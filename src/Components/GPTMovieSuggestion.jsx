import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const GPTMovieSuggestion = () => {
  const title = useSelector(store => store?.GPT?.GPTSearchValue);
  const movies = useSelector(store => store?.GPT?.GPTMovies);
  return (
    <div className='pt-4 pb-4 px-4 text-white bg-[#000000cc] lg:pt-6 lg:pb-20 lg:px-12'>
      <MovieList title={title} movies={movies} />
    </div>
  )
}

export default GPTMovieSuggestion