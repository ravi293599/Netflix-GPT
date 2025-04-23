import React from 'react'
import { movieImageURL } from '../Utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <>
        <img alt='card-image' className="cursor-pointer" width={180} src={movieImageURL+ posterPath} />
    </>
  )
}

export default MovieCard