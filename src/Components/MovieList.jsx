import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='mt-10'>
        <h1 className='text-3xl font-bold mb-5'>{title}</h1>
        <div className='flex gap-5 overflow-x-scroll'>
            {
                movies &&
                movies.map(mov => <MovieCard key={mov.id} posterPath={mov.poster_path} />)
            }
        </div>
    </div>
  )
}

export default MovieList