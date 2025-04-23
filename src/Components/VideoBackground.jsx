import React from 'react'
import useFetchTrailer from '../hooks/useFetchTrailer'
import { useSelector } from 'react-redux';

const VideoBackground = ({movie_id}) => {
  console.log(movie_id);
  useFetchTrailer({movie_id});
  const movieTrailer = useSelector(store => store.movies?.movieTrailer);
  if(movieTrailer==null) return
  console.log(movieTrailer);
  return (
    <div className='absolute top-0 aspect-video w-full'>
      <iframe className='aspect-video bg-video' width="100%" height={500}
      // src="https://www.youtube.com/embed/8B1EtVPBSMw?version=3&&vq=hd1080&autoplay=1&mute=1" 
      src={"https://www.youtube.com/embed/"+movieTrailer.key+"?version=3&&vq=hd1080&autoplay=1&mute=1"} 
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackground