import { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import './Home.css'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchMovies = async (url) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('No se pudieron obtener las películas')
      }
      const data = await response.json()
      setMovies(data.results)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const loadPopular = () => {
    fetchMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`)
  }

  // Al montar la página se cargan las películas populares
  useEffect(() => {
    loadPopular()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) {
      loadPopular()
      return
    }
    fetchMovies(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(searchQuery)}`
    )
  }

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar películas por título..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <p className="loading">Cargando...</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      {!loading && !error && movies.length === 0 && (
        <p className="empty-message">No se encontraron películas.</p>
      )}
    </div>
  )
}

export default Home
