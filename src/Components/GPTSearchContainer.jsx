import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { MainImage } from '../Utils/Constants'

const GPTSearchContainer = () => {
  return (
    <div className={`-mt-[104px] top-0 w-full bg-no-bg-no-repeat bg-cover bg-[url(${MainImage})]`}>
        <GPTSearchBar />
        <GPTMovieSuggestion />
    </div>
  )
}

export default GPTSearchContainer