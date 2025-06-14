import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storeFavs = localStorage.getItem("favorite")
        console.log(storeFavs);
        if (storeFavs) setFavorites(JSON.parse(storeFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorite = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorite = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorite,
        removeFromFavorite,
        isFavorite
    }

    return  <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}