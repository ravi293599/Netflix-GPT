import { useDispatch } from 'react-redux'
import './App.css'
import Body from './Components/Body'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Utils/firebase'
import { addUser, removeUser } from './Utils/Store/UserSlice'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uuid,email,displayName,photoURL} = user;
        dispatch(addUser({uuid: uuid, email: email, displayName: displayName,photoURL:photoURL}));
      }
      else{
        dispatch(removeUser());
      }
    })
  },[])
  return (
    <>
      <Body />
    </>
  )
}

export default App
