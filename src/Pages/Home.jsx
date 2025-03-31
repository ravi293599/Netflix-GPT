import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { accordianData, reasonData } from '../Utils/Constants'
import Accordian from '../Components/Accordian';

const Home = () => {
  return (
    <>
    <div className='text-center pb-6 relative bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_large.jpg)] bg-no-bg-no-repeat bg-cover after:w-full after:top-0 after:left-0 after:bottom-0 after:h-full after:absolute after:bg-black/60'>
    {/* <div className='bg-black text-center pb-6'> */}
        <Header />
        <div className='text-white pt-40 z-10 relative'>
          <h1 className='text-6xl leading-[70px] font-bold'>Unlimited movies,<br/> TV shows and more</h1>
          <h4 className='text-xl my-7 font-medium'>Starts at ₹149. Cancel at any time.</h4>
          <p className='text-base'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='flex gap-3 mt-3 items-center justify-center'>
          <input type="email" placeholder='Email address' className='p-4 w-[28%] outline-none text-white bg-stone-500/30 rounded-lg border border-[#808080b3]' />
          <button className='py-3 pl-4 pr-10 text-2xl font-medium text-white bg-[#e50914] rounded-lg relative hover:bg-[#96080f] before:absolute before:h-[14px] before:w-[3px] before:bg-white before:-rotate-45 before:right-[20px] before:top-[18px] after:absolute after:h-[14px] after:w-[3px] after:bg-white after:rotate-45 after:right-[20px] after:bottom-[16px]'>Get Started</button>
        </div>
        </div>
        
    </div>
    <div className='bg-black border-t-2 border-red-600 py-20 px-36'>
      <div className='pb-8'>
        <h2 className="font-semibold text-white text-3xl">Trending Now</h2>
        <div className='flex mt-4'>
          <div className='relative'>
            <img width={270} src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" />
            <span className='absolute text-8xl text-stroke-2 text-black font-black top-0 -left-6 stroke-white stroke-2 text-shadow'>1</span>
          </div>
        </div>
      </div>
      <div className='text-white'>
        <h2 className='font-semibold text-3xl'>More reasons to join</h2>
        <div className='flex gap-4 mt-5'>
        {/* background: linear-gradient(149deg, #192247 0%, #210e17 96.86%); */}
          {
            reasonData.map((el)=>(
              <div className='flex flex-col justify-between gap-10 w-1/4 p-4 max-h-[360px] rounded-lg bg-gradient-to-br from-[#192247] to-[#210e17]' key={el.id}>
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
        <h2 className="font-semibold text-white text-3xl">Frequently Asked Questions</h2>
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