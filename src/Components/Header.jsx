import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from "../assets/Images/Logo.svg"
import { signOut } from 'firebase/auth'
import { auth } from '../Utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { toggleGPTSearchView } from '../Utils/Store/GPTSlice'
import { Supported_Languages } from '../Utils/Constants'
import { changeLanguage } from '../Utils/Store/ConfigSlice'
import { TiArrowSortedDown } from "react-icons/ti";
// import { useDispatch } from 'react-redux'
// import { removeUser } from '../Utils/Store/UserSlice'

const Header = () => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const user = useSelector((store) => store.user)
  const GPTOption = useSelector((store) => store.GPT.GPTSearchView);
  const navigate = useNavigate();
  const handleSignOut = () =>{
    signOut(auth)
    .then(()=>{
      //signout functionality 
      // dispatch(removeUser())
      navigate("/login");
      localStorage.setItem("auth", 'false');
    })
    .catch((error)=>{
      //An Error Happen
      console.log(error);
    })
  }
  const handleSignIn = () =>{
    navigate("/login")
  }
  const handleGPTSearch = () =>{
    dispatch(toggleGPTSearchView());
  }
  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }
  // console.log(user)
  return (
    <header className='flex items-center justify-between w-full z-20 relative py-4 px-[10px] md:px-[40px] xl:px-[120px] xl:py-8 header-gradient'>
        <div className='logo'>
          {/* <Link to="/"><svg viewBox="0 0 111 30" className='h-[2.5rem] w-[9.25rem] fill-current text-[#e50914]' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg></Link> */}
          <Link to="/"><img alt='logo' className=" my-filter w-[100px] lg:w-[150px]" src={logo} /></Link>
        </div>
        {
          user && 
         <div className='flex items-center gap-3'>
          {GPTOption && <select className='border py-1 appearance-none pr-5 pl-3 border-white outline-none rounded-md bg-black text-white relative before:absolute before:w-[1px] before:h-[3px] before:bg-white before:right-0 before:top-0' onChange={handleLanguageChange}>
                {Supported_Languages.map(
                  lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                )}
            </select>}
         <button className='bg-green-700 text-white p-2 rounded-lg' onClick={handleGPTSearch}>{GPTOption? "Browse Page" : "GPT Search"}</button>
          {
            !GPTOption && 
            <div className='flex gap-3 relative user-info'>
            <img alt="user" className='profile-pic' src={user.photoURL} height={30} width={30} />
            <TiArrowSortedDown className='text-white text-2xl -ml-3 mt-3' />
            <div className='login-details absolute bg-[#111] rounded-lg w-[200px] top-10 right-0 shadow-md shadow-black'>
              <div className='flex items-start flex-col text-white p-3'>
                <span><img alt='' />{user.displayName}</span>
                <span><img alt='' />Children</span>
                <span><img alt='' />Manage Profiles</span>
                <span><img alt='' />Transfer Profile</span>
                <span><img alt='' />Account</span>
                <span><img alt='' />Help Center</span>
              </div>
              <div className='text-center text-white p-3 cursor-pointer border-t-[1px] border-white' onClick={handleSignOut}>Sign out of Netflix</div>
            </div>
          </div>
          }
         </div>
        }
        {
          ["/"].includes(path) && 
          <div className='flex gap-3'>
            <select className='border py-1 appearance-none pr-5 pl-3 outline-none border-white rounded-md bg-black text-white relative before:absolute before:w-[1px] before:h-[3px] before:bg-white before:right-0 before:top-0'>
                {Supported_Languages.map(
                  lang => <option key={lang.identifier} name={lang.identifier}>{lang.name}</option>
                )}
            </select>
            <button className='font-medium py-1 px-3 text-white bg-[#e50914] rounded-md ' onClick={handleSignIn}>Sign In</button>
          </div>
        }
    </header>
  )
}

export default Header