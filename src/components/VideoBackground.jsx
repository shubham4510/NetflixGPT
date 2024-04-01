import {API_OPTIONS} from '../utils/constants.jsx'

const VideoBackground = ({movieId}) => {
    //fetch trailer video

  const getMovieVideos = async ()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/823464/videos?language=en-US`, API_OPTIONS)
  }



  return (

    <div></div>
  )
}

export default VideoBackground