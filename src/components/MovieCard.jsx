import {IMG_CDN_URL} from '../utils/constants.jsx'

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <img className=' cursor-pointer hover:shadow-white hover:shadow-lg' src={IMG_CDN_URL+posterPath} alt="movie card" />
    </div>
  )
}

export default MovieCard