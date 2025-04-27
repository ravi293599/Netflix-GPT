import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='mt-2'>
        <h1 className='text-2xl font-bold mb-5 lg:text-3xl'>{title}</h1>
        <div className='flex gap-5 overflow-x-auto'>
            {
                movies &&
                movies.map(mov => <MovieCard key={mov.id} posterPath={mov.poster_path} />)
            }
        </div>
    </div>
  )
}

export default MovieList