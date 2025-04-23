import React from 'react'
import lang from '../Utils/LanguageConstant'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
    const language = useSelector((store) => store.config.siteLanguage);
    console.log(language)
  return (
    <div className='pt-36 flex justify-center'>
        <form className='bg-black p-5 w-1/2 flex gap-4 rounded-xl'>
            <input type="text" className='p-4 w-full rounded-md outline-none' placeholder={lang[language].SearchPlaceholder} />
            <button className='py-2 px-5 bg-[#e50914] text-white rounded-lg'>{lang[language].Search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar