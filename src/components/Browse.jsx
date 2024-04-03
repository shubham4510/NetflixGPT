import { useState } from "react"
import Header from './Header.jsx'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.jsx'
import usePopularMovies from '../hooks/usePopularMovies.jsx'
import MainContainer from "./MainContainer.jsx"
import SecondaryContainer from "./SecondaryContainer.jsx"


const Browse = () => {
  const [userLogIn, setUserLogIn] = useState(true)

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header userLogIn={userLogIn}/>
      <MainContainer/>
      <SecondaryContainer/>
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