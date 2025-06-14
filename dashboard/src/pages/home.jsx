import MovieList from "../components/MovieList";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css"; 

function Home() {

    const [searchQuery, setSearchQuery] = useState(""); // this statment is important to mantain the state of the components.
    // foreg: if we update any values in the list, the new state will be maintained , if we donot use userState function the new changes will not be reflected even re-render
    
    
    // Call api to fetch the details of the movie
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    // The useEffect will only run when the page is re-rendered, for example, if i like any images or if i start searching for something
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
            if (loading) return
        setLoading(true)

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (error) {
            setError("Failed to search movies..")
        } finally {
            setLoading(false);
        }

        searchQuery("");
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search=form">
                <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />                
                <button type="submit" className="search-button"> Search </button>
            </form>

            {error && <div className="error-message">{error}</div>}
            
            {loading ? (<div className="loading"> Loading...</div>
                ) : (
                <div className="movies-grid">
                    {movies.map(
                        (movie) => (
                        movie.title.toLowerCase().startsWith(searchQuery) && <MovieList movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home