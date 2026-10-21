import { createContext, useContext, useEffect, useState } from 'react'

const MovieContext = createContext()

// Hook personalizado para usar el contexto desde cualquier componente
export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const [loaded, setLoaded] = useState(false)

  // Al iniciar, se cargan los favoritos de localStorage
  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    if (stored) setFavorites(JSON.parse(stored))
    setLoaded(true)
  }, [])

  // Cada vez que cambian, se guardan (solo cuando ya se han cargado)
  useEffect(() => {
    if (loaded) localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites, loaded])

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie])
  }

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId))
  }

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId)
  }

  const value = { favorites, addToFavorites, removeFromFavorites, isFavorite }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}