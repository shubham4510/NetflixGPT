
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    //fetch trailer video && updating the store with trailer video data
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  
    useMovieTrailer(movieId);
  


  return (

    <div className='w-full h-[96vh] select-none overflow-hidden'>
      <iframe className=' translate-y-[-23px] w-full h-full scale-[143%] ' src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?mute=1&autoplay=1&controls=0&loop=1&rel=0"}  title="YouTube video player"  autoplay ></iframe>
    </div>
  )
}

export default VideoBackground