import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { MainImage } from '../Utils/Constants'
import { useSelector } from 'react-redux'

const GPTSearchContainer = () => {
  const movies = useSelector(store => store?.GPT?.GPTMovies);
  return (
    <div className={`-mt-[104px] top-0 w-full before:bg-no-repeat before:bg-cover before:fixed before:top-0 before:left-0 before:right-0 before:bottom-0 before:w-full before:h-full before:-z-10 bg-[url(${MainImage})]`}>
        <GPTSearchBar />
        {movies && <GPTMovieSuggestion />}
    </div>
  )
}

export default GPTSearchContainer