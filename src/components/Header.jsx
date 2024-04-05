import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {LOGO, SUPPORTED_LANGUAGES} from '../utils/constants.jsx'
import {toggleGptSearchView} from '../utils/gptSlice.jsx'
import { useDispatch, useSelector } from "react-redux";
import {changeLanguage} from '../utils/configSlice.jsx'

const Header = ({handleIsLoggedIn,isLoggedIn,userLogIn}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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

  const handleLanguageChange = (e)=>{
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }


  return (
    <div className=' absolute px-48 py-1 bg-gradient-to-b from-black z-50 text-white flex justify-between items-center w-screen h-24'>
        <img className=' w-48' src={LOGO} alt="logo" />

    {
      userLogIn?<div className=" flex gap-3">
      {showGptSearch && <select name="lang" className={`px-2 py-1 rounded-sm bg-black/45 border border-white`} onChange={handleLanguageChange}>
        {
          SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier} className='text-black'>{lang.name}</option>)
        }
            
        </select>}
      <button className={` ${userLogIn?"block":"hidden"} px-3 py-2 rounded-sm bg-gradient-to-r from-orange-600 to-yellow-500 hover:opacity-80 text-white `} onClick={handleGptSearchClick}>{showGptSearch? "Homepage":"GPT Search"}</button>
      <button className={` ${userLogIn?"block":"hidden"} px-3 py-2 rounded-sm bg-red-600 text-white `} onClick={handleSignOut}>Sign Out</button>
      </div>:
        
      
        
<button className={` px-2 py-1 rounded-sm bg-red-600 text-white `} onClick={handleIsLoggedIn}>Sign Up</button>
    }
     
    </div>
  )
}

export default Header