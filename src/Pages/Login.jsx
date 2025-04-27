import React, { useRef, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom'
import { HiCheck } from "react-icons/hi";
import { CheckValidData } from '../Utils/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/Store/UserSlice';
import { MainImage,Avtar } from '../Utils/Constants';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setSignUp] = useState(false);
  const[remember,setRemember] = useState(false);
  const[errorMessage,setErrorMsg] = useState(null);
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const handleSignUp = () =>{
    setSignUp(!isSignUp);
    //console.log(fullname.current.value)
  }
  const handleSignIn = () =>{
    const errMsg = CheckValidData(email.current.value,password.current.value)
    setErrorMsg(errMsg)
    if(errMsg) return
    //Sign In and Sign Up Logic
    if(isSignUp){
      //Sign Up Logic here
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) =>{
        //Signed In
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullname.current.value, photoURL: {Avtar}
        })
        .then(()=>{
          //Profile Updated
           const {uuid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uuid: uuid, email: email, displayName: displayName,photoURL:photoURL}));
          console.log(user);
          // navigate("/browse")
          localStorage.setItem("auth", 'true');
        })
        .catch((error)=>{
          //Error Handling
          setErrorMsg(error);
        })
      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + "-" + errorMessage);
      })
    }
    else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential)=>{
        //Signed In Logic
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem("auth", 'true');
        navigate("/browse")
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + "-" + errorMessage);
      })
    }
  }
  return (
    <>
    <div className={`login-wrap relative bg-[url(${MainImage})] bg-no-bg-no-repeat bg-cover after:w-full after:top-0 after:bottom-0 after:h-full after:absolute after:bg-black/40`}>
       {/* < div className='bg-slate-800 bg-gradient-to-t from-black'> */}
      <Header />
      <div className="flex align-center justify-center login-form relative pb-4 lg:pb-16">
        <form className='flex flex-col w-[500px] p-5 bg-black/80 rounded-lg lg:p-16' onClick={(e) => e.preventDefault()}>
            <h2 className='text-white text-3xl font-bold mb-8'>{isSignUp?"Sign Up":"Sign In"}</h2>
            {isSignUp && <input type="text" placeholder='Enter name' ref={fullname} className='p-4 mb-4 bg-stone-500/30 border text-white border-[#808080b3] border-solid rounded-lg' />}
            <input type="text" placeholder='Email or mobile number' ref={email} className='p-4 mb-4 bg-stone-500/30 border text-white border-[#808080b3] border-solid rounded-lg' />
            <input type="password" placeholder='password' ref={password} className='p-4 mb-4 bg-stone-500/30 border text-white border-[#808080b3] border-solid rounded-lg' />
            {isSignUp && <input type="password" placeholder='Confirm password' ref={confirmPassword} className='p-4 mb-4 bg-stone-500/30 border text-white border-[#808080b3] border-solid rounded-lg' />}
            {errorMessage&&<p className='text-red-600 font-semibold text-lg mb-2'>{errorMessage}</p>}
            <button className='p-3 mb-4 mt-0 text-white bg-[#e50914] rounded-lg' onClick={handleSignIn}>{isSignUp?"Sign up":"Sign in"}</button>
            {!isSignUp && 
            <div className='text-center text-white'>
            <p>OR</p>
            <button className='p-3 my-4 text-white bg-[#80808066] rounded-lg w-full'>Use a sign-in code</button>
            <Link to="/">Forget password?</Link>
            </div>
            }
            <div className='mt-4'>
              {!isSignUp &&
              <label className="flex items-center justify-start gap-2" onClick={()=>setRemember(!remember)} >
                <span className={remember?'flex align-center justify-center border p-0.5 border-white w-5 h-5 relative bg-white':'flex align-center justify-center border p-0.5 border-white w-5 h-5 relative '}>
                  {remember && <HiCheck className='contrast-100' />}
                </span>
                <span className='text-white cursor-pointer'>Remember me</span>
             </label>
              }
              <p className='text-slate-300 mt-2'>{isSignUp?"Already a Member?":"New to Netflix?"}<span onClick={handleSignUp} className='text-white font-semibold ml-2 cursor-pointer'>{isSignUp?"Sign in now":"Sign up now"}</span></p>
            </div>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login
