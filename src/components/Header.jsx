import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {LOGO} from '../utils/constants.jsx'

const Header = ({handleIsLoggedIn,isLoggedIn,userLogIn}) => {
  const navigate = useNavigate()

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



  return (
    <div className=' absolute px-48 py-1 bg-gradient-to-b from-black z-50 text-white flex justify-between items-center w-screen h-24'>
        <img className=' w-48' src={LOGO} alt="logo" />

    {
      userLogIn?<button className={` ${userLogIn?"block":"hidden"} px-2 py-1 rounded-sm bg-red-600 text-white `} onClick={handleSignOut}>Sign Out</button>:
      <div className={`${isLoggedIn? "block":"hidden"} flex gap-5 `} >
        <select name="lang" className={`px-2 py-1 rounded-sm bg-transparent border border-white`}>
            <option className='text-black' value="eng">English</option>
            <option className='text-black' value="hin">Hindi</option>
        </select>
        
<button className={` px-2 py-1 rounded-sm bg-red-600 text-white `} onClick={handleIsLoggedIn}>Sign Up</button>
</div>
    }
     
    </div>
  )
}

export default Header