import React from 'react'
import { FaPlay } from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";

const VideoDesc = ({title, overview}) => {
  return (
    <div className='pt-52 px-3 pb-3 w-full absolute aspect-video top-0 text-white bg-[#000000cc] lg:px-12'>
        <h1 className='text-2xl font-bold lg:text-6xl'>{title}</h1>
        <p className='py-6 text-base lg:w-1/3'>{overview}</p>
        <div className='flex gap-3'>
            <button className="text-black bg-white py-2 px-6 rounded-lg flex gap-3 items-center text-lg"><FaPlay /> Play</button>
            <button className="text-white bg-zinc-500 py-2 px-6 rounded-lg flex gap-3 items-center text-lg"><RiInformation2Line className='text-[25px]' /> More info</button>
        </div>
    </div>
  )
}

export default VideoDesc