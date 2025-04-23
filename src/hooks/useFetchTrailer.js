import React, { useEffect } from 'react'
import { API_OPTION } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import { addMovieTrailer } from '../Utils/Store/MovieSlice';

const useFetchTrailer = ({movie_id}) => {
    const dispatch = useDispatch();
    console.log(movie_id)
    //const movieURL = "https://api.themoviedb.org/3/movie/950387/videos?language=en-US"
    const movieURL = `https://api.themoviedb.org/3/movie/${movie_id}+"/videos?language=en-US"`;
    const getTrailer = async () =>{
        const movieTrailer = await fetch(movieURL,API_OPTION);
        const data = await movieTrailer.json();
        // Now to get the trailer logic
        const filterVideo = data.results.filter(video => video.type==="Trailer");
        const trailer = filterVideo.length ? filterVideo[0] : data.results[0];
        //console.log(trailer);
        dispatch(addMovieTrailer(trailer));
    }
    useEffect(()=>{
        getTrailer();
    },[])
}

export default useFetchTrailer