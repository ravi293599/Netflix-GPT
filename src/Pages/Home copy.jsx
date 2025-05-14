import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { accordianData, movieImageURL, reasonData } from '../Utils/Constants'
import Accordian from '../Components/Accordian';
import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usePopularMovies';

const Home = () => {
  usePopularMovies();
  const trending = useSelector(store => store.movies?.popularMovies);
  return (
    <>
    <div className='text-center pb-6 relative bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg)] bg-no-bg-no-repeat bg-cover after:w-full after:top-0 after:left-0 after:bottom-0 after:h-full after:absolute after:bg-black/60'>
    {/* <div className='bg-black text-center pb-6'> */}
        <Header />
        <div className='text-white pt-10 z-10 relative lg:pt-40'>
          <h1 className='text-3xl leading-8 font-bold md:text-4xl md:leading-5 xl:text-6xl lg:leading-[70px]'>Unlimited movies,<br/> TV shows and more</h1>
          <h4 className='text-xl my-7 font-medium'>Starts at ₹149. Cancel at any time.</h4>
          <p className='text-base'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='flex gap-3 mt-3 items-center justify-center'>
          <input type="email" placeholder='Email address' className='p-4 w-[28%] outline-none text-white bg-stone-500/30 rounded-lg border border-[#808080b3]' />
          <button className='py-3 pl-4 pr-10 text-xl font-medium text-white bg-[#e50914] rounded-lg relative lg:text-2xl hover:bg-[#96080f] before:absolute before:h-[14px] before:w-[3px] before:bg-white before:-rotate-45 before:right-[20px] before:top-[18px] after:absolute after:h-[14px] after:w-[3px] after:bg-white after:rotate-45 after:right-[20px] after:bottom-[16px]'>Get Started</button>
        </div>
        </div>
        
    </div>
    <div className='bg-black border-t-2 border-red-600 py-4 px-8 md:py-8 md:px-12 lg:py-20 lg:px-36'>
      <div className='pb-8'>
        <h2 className="font-bold text-white text-2xl lg:text-3xl">Trending Now</h2>
        <div className='mt-4 overflow-y-auto'>
          <div className='flex gap-10 w-[2000px] ml-7'>
            {
              trending && trending.map((trend,i) => 
              (
                <>
                {i<=9 && 
                  <div className='relative w-full' key={trend.id}>
                  <img className='w-[250px] rounded-3xl' src={movieImageURL+ trend.poster_path} />
                  <span className='absolute text-2xl text-stroke-2 text-black font-black top-4 -left-6 stroke-white stroke-2 text-shadow md:text-6xl lg:text-7xl'>{i+1}</span>
                  </div>
                }
                </>
              )
              )
            }
          </div>
        </div>
      </div>
      <div className='text-white'>
        <h2 className='font-semibold text-2xl lg:text-3xl'>More reasons to join</h2>
        <div className='flex flex-col gap-4 mt-5 md:flex-row flex-wrap lg:flex-row'>
        {/* background: linear-gradient(149deg, #192247 0%, #210e17 96.86%); */}
          {
            reasonData.map((el)=>(
              <div className='flex flex-col justify-between gap-10 w-full p-4 max-h-[360px] rounded-lg bg-gradient-to-br from-[#192247] to-[#210e17] md:w-1/2 lg:w-[23%]' key={el.id}>
                <div>
                  <h2 className='text-2xl font-medium mb-3'>{el.title}</h2>
                  <p>{el.para}</p>
                </div>
                <div className='flex justify-end'>
                  <img alt="USP-icon" src={el.icon} />
                </div>
             </div>
            ))
          }
        </div>
      </div>
      <div className='mt-10'>
        <h2 className="font-semibold text-white text-xl md:2xl lg:text-3xl">Frequently Asked Questions</h2>
        <div className='mt-4 text-white'>
          <div className='flex flex-col gap-y-4'>
            {
              accordianData.map((data)=>(
                <Accordian data={data} key={data.title} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home