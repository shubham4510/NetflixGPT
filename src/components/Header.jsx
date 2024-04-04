import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {LOGO} from '../utils/constants.jsx'
import {toggleGptSearchView} from '../utils/gptSlice.jsx'
import { useDispatch, useSelector } from "react-redux";

const Header = ({handleIsLoggedIn,isLoggedIn,userLogIn}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)

  const handleSignOut = async () => {
    const auth = getAuth();
    
    // Check if the user is already signed out
    if (!auth.currentUser) {
      // User is already signed out, no need to sign out again
      navigate("/");
      return;
    }
  
    try {
      await signOut(auth);
      // Sign-out successful
      navigate("/");
    } catch (error) {
      // An error occurred during sign-out
      navigate("/error");
    }
  };


  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }



  return (
    <div className=' absolute px-48 py-1 bg-gradient-to-b from-black z-50 text-white flex justify-between items-center w-screen h-24'>
        <img className=' w-48' src={LOGO} alt="logo" />

    {
      userLogIn?<div className=" flex gap-3">
       <select name="lang" className={`px-2 py-1 rounded-sm bg-black/45 border border-white`}>
            <option className='text-black' value="eng">English</option>
            <option className='text-black' value="hindi">Hindi</option>
            <option className='text-black' value="spanish">Spanish</option>
        </select>
      <button className={` ${userLogIn?"block":"hidden"} px-3 py-2 rounded-sm bg-gradient-to-r from-orange-600 to-yellow-500 hover:opacity-80 text-white `} onClick={handleGptSearchClick}>GPT Search</button>
      <button className={` ${userLogIn?"block":"hidden"} px-3 py-2 rounded-sm bg-red-600 text-white `} onClick={handleGptSearchClick}>Sign Out</button>
      </div>:
      <div className={`${isLoggedIn? "block":"hidden"} flex gap-5 `} >
        <select name="lang" className={`px-2 py-1 rounded-sm bg-transparent border border-white`}>
            <option className='text-black' value="en">English</option>
            <option className='text-black' value="hindi">Hindi</option>
            <option className='text-black' value="spanish">Spanish</option>
        </select>
        
<button className={` px-2 py-1 rounded-sm bg-red-600 text-white `} onClick={handleIsLoggedIn}>Sign Up</button>
</div>
    }
     
    </div>
  )
}

export default Header