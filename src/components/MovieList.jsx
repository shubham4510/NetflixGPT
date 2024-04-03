import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return movies && (
    <div className='translate-y-[-130px]'>
      <h1 className=' text-3xl text-white p-4'>{title}</h1>
      <div className='flex overflow-x-auto scrollbar-hide'>
        <div className='flex space-x-2 '>
          {movies.map(movie => (
            <div key={movie.id} className='w-64 flex-shrink-0'>
              <MovieCard title={title} posterPath={movie?.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
