const API_KEY=""
const BASE_URL="https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    // await helps pauses your application till the request is completed, 
    // this helps in preventing undefined data error or displaying null values which might break your application going forwards
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); 
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`)
    const data = await response.json()
    return data.results
}