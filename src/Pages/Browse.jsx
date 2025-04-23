import React from 'react'
import Header from '../Components/Header'
import Footer from "../Components/Footer"
import useNowPlayingMovie from '../hooks/useNowPlayingMovie'
import MainContainer from '../Components/MainContainer';
import SecondaryContainer from '../Components/SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRates from '../hooks/useTopRates';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import usePopularShow from '../hooks/usePopularShow';
import { useSelector } from 'react-redux';
import GPTSearchContainer from '../Components/GPTSearchContainer';

const Browse = () => {
  const GPTSearchView = useSelector(store => store.GPT.GPTSearchView)
  useNowPlayingMovie();
  usePopularMovies();
  useTopRates();
  useUpcomingMovies();
  useTrendingMovies();
  usePopularShow();
  return (
    <div>
      <Header />
      {
        GPTSearchView?<GPTSearchContainer/>:
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
      <Footer />
    </div>
  )
}

export default Browse
