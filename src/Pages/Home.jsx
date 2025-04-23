import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { accordianData, movieImageURL, reasonData } from "../Utils/Constants";
import Accordian from "../Components/Accordian";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";

const Home = () => {
  usePopularMovies();
  const trending = useSelector((store) => store.movies?.popularMovies);
  console.log(trending);
  return (
    <div className="relative">
      <div className="bg-[#0f0f0f]">
        <div className="main-bg">
          <div className="first-div"></div>
          <div className="second-div"></div>
          <div className="third-div"></div>
        </div>
        <Header />
        <div className="px-12">
          <div className="relative above-fold">
            <div className="mask-image">
              <div class="main-container">
                <div class="hero-wrap">
                  <div class="hero-container">
                    <div data-uia="hero-content-card-vlv" class="hero-content">
                      <div dir="ltr" class="empty-div"></div>
                      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc2c345e-5991-4917-be24-cd328b62cc3f/web_tall_panel/IN-en-20250414-TRIFECTA-perspective_0f1fb403-6efb-4223-8f10-cfd1a902f22c_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/fc2c345e-5991-4917-be24-cd328b62cc3f/web_tall_panel/IN-en-20250414-TRIFECTA-perspective_0f1fb403-6efb-4223-8f10-cfd1a902f22c_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/fc2c345e-5991-4917-be24-cd328b62cc3f/web_tall_panel/IN-en-20250414-TRIFECTA-perspective_0f1fb403-6efb-4223-8f10-cfd1a902f22c_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/fc2c345e-5991-4917-be24-cd328b62cc3f/web_tall_panel/IN-en-20250414-TRIFECTA-perspective_0f1fb403-6efb-4223-8f10-cfd1a902f22c_small.jpg 959w" alt="" aria-hidden="true" className="hero-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center rounded-3xl pb-28 relative">
              <div className="text-white pt-10 z-10 relative lg:pt-40">
                <h1 className="text-3xl leading-8 font-bold md:text-4xl md:leading-5 xl:text-6xl lg:leading-[70px]">
                  Unlimited movies, TV <br />
                  shows and more
                </h1>
                <h4 className="text-xl my-7 font-medium">
                  Starts at ₹149. Cancel at any time.
                </h4>
                <p className="text-base">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                <div className="flex gap-3 mt-3 items-center justify-center">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="p-4 w-[28%] outline-none text-white bg-stone-500/60 rounded-full border border-[#808080b3]"
                  />
                  <button className="py-3 pl-6 pr-12 text-xl font-medium text-white bg-[#e50914] rounded-full relative lg:text-2xl hover:bg-[#96080f] before:absolute before:h-[14px] before:w-[3px] before:bg-white before:-rotate-45 before:right-[20px] before:top-[18px] after:absolute after:h-[14px] after:w-[3px] after:bg-white after:rotate-45 after:right-[20px] after:bottom-[16px]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-4 px-8 md:py-8 md:px-12 lg:py-20 lg:px-24">
            <div className="pb-8">
              <h2 className="font-bold text-white text-2xl lg:text-3xl">
                Trending Now
              </h2>
              <div className="mt-4 overflow-y-auto">
                <div className="flex gap-10 w-[2000px] ml-7">
                  {trending &&
                    trending.map((trend, i) => (
                      <>
                        {i <= 9 && (
                          <div className="relative w-full" key={trend.id}>
                            <img
                              className="w-[250px] rounded-3xl"
                              src={movieImageURL + trend.poster_path}
                            />
                            <span className="absolute text-2xl text-stroke-2 text-black font-black top-4 -left-6 stroke-white stroke-2 text-shadow md:text-6xl lg:text-7xl">
                              {i + 1}
                            </span>
                          </div>
                        )}
                      </>
                    ))}
                </div>
              </div>
            </div>
            <div className="text-white">
              <h2 className="font-semibold text-2xl lg:text-3xl">
                More reasons to join
              </h2>
              <div className="flex flex-col gap-4 mt-5 md:flex-row flex-wrap lg:flex-row">
                {/* background: linear-gradient(149deg, #192247 0%, #210e17 96.86%); */}
                {reasonData.map((el) => (
                  <div
                    className="flex flex-col justify-between gap-10 w-full p-4 max-h-[360px] rounded-lg bg-gradient-to-br from-[#192247] to-[#210e17] md:w-1/2 lg:w-[23%]"
                    key={el.id}
                  >
                    <div>
                      <h2 className="text-2xl font-medium mb-3">{el.title}</h2>
                      <p>{el.para}</p>
                    </div>
                    <div className="flex justify-end">
                      <img alt="USP-icon" src={el.icon} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <h2 className="font-semibold text-white text-xl md:2xl lg:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-4 text-white">
                <div className="flex flex-col gap-y-4">
                  {accordianData.map((data) => (
                    <Accordian data={data} key={data.title} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
