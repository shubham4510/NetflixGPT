import { useState } from "react"
import Header from './Header.jsx'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.jsx'
import usePopularMovies from '../hooks/usePopularMovies.jsx'
import MainContainer from "./MainContainer.jsx"
import SecondaryContainer from "./SecondaryContainer.jsx"
import GptSearch from "./GptSearch.jsx"
import { useSelector } from "react-redux"


const Browse = () => {
  const [userLogIn, setUserLogIn] = useState(true)
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)


  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header userLogIn={userLogIn}/>
      {
        showGptSearch? <GptSearch/> : <><MainContainer/>
        <SecondaryContainer/></>
      }
      
      {
        /*
        MainContainer
         - VideoBackground
         - VideoTitle
        SecondaryContainer
         - cards * n
        */ 
      }
    </div>
  )
}

export default Browse