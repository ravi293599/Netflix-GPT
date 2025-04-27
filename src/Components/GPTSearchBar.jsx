import React, { useRef } from 'react'
import lang from '../Utils/LanguageConstant'
import { useDispatch, useSelector } from 'react-redux'
//import openai from '../Utils/openai';
import { API_OPTION } from '../Utils/Constants';
import { addSearchedMovies, addSearchValue } from '../Utils/Store/GPTSlice';

const GPTSearchBar = () => {
    const dispatch = useDispatch();
    const language = useSelector((store) => store.config.siteLanguage);
    const searchText = useRef(null);
    const searchMovieTMDB = async(movie) =>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTION);
      const json = await data.json();
      return json.results;
    }
    const handleGPTSearch = async() =>{
      console.log(searchText.current.value);
      const searchedData = await searchMovieTMDB(searchText.current.value);
      const filteredData = searchedData.filter((movie) => movie.poster_path != null)
      dispatch(addSearchedMovies(filteredData));
      dispatch(addSearchValue(searchText.current.value));
      console.log(filteredData());
      //Make an GPT API call to get the desired movie result
      // const gptQuery = "Act as a Movie Recomandation System and suggest some movies for the query : " + searchText.current.value + 
      // ". only give me name of 10 movies, comma seperated like the example given ahead. Example: Dhoom,Raaz,Golmaal,Saavan,Kisana"; 
      // const GPTResults = await openai.chat.completions.create({
      //   messages: [{role: "user", content: gptQuery}],
      //   model: "gpt-3.5-turbo",
      // });
      // if(!GPTResults.choices){
      //   //TODO: Write Error Handling
      // }
      // console.log(GPTResults.choices?.[0]?.message?.content);
      // const gptMovies = GPTResults.choices?.[0]?.message?.content.split(",");
      // //For each movie will have to search TMDB API
      // const tmdbResults = await gptMovies.map((movie) => searchMovieTMDB(movie));
      // const finalSearchedData = await Promise.all(tmdbResults);
      // console.log(finalSearchedData);
    }
  return (
    <div className='pt-36 pb-4 flex justify-center lg:pb-32'>
        <form className='bg-[#000000cc] p-5 flex gap-4 rounded-xl lg:w-1/2' onSubmit={(e) => e.preventDefault()}>
            <input type="text" ref={searchText} className='p-4 w-full rounded-md outline-none' placeholder={lang[language].SearchPlaceholder} />
            <button className='py-2 px-5 bg-[#e50914] text-white rounded-lg' onClick={handleGPTSearch}>{lang[language].Search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar