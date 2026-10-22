import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'
import './Favorites.css'

const Favorites = () => {
  const { favorites } = useMovieContext()

  return (
    <div className="favorites">
      <h1>Mis favoritas</h1>

      {favorites.length === 0 ? (
        <p className="favorites-empty">
          Todavía no tienes películas favoritas. Añade alguna desde Home.
        </p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites