
import "../css/Favorites.css"; 
import { useMovieContext } from "../context/movieContext";
import MovieList from "../components/MovieList";

function Favorite() {

    const {favorites} = useMovieContext();
    if (favorites) {
        return (
            <div className="favorites"> 
            <h2>Favorite List</h2>
            <div className="movies-grid">
                    {favorites.map(
                        (movie) => (
                       <MovieList movie={movie} key={movie.id} />
                    ))}
                </div>
                </div>
        );
    }
    return <div className="favorites-empty">
        <h2>No Favorites Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
    }

export default Favorite
