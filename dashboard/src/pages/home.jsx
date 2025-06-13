import MovieList from "../components/MovieList";
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState(""); // this statment is important to mantain the state of the components.
    // foreg: if we update any values in the list, the new state will be maintained , if we donot use userState function the new changes will not be reflected even re-render
    const movies = [
        {id:1, title: "John Wick" , release_date:"2020-05-10"},
        {id:2, title: "Comedy Begins" , release_date:"1998-10-25"},
        {id:3, title: "Shiny Worlds" , release_date:"2000-05-01"},
        {id:4, title: "Vimmi Bio" , release_date:"1996-12-10"},
        {id:5, title: "Comedy movies" , release_date:"2021-01-20"},
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("---------")
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

            <div className="movies-grid">
                {movies.map(
                    (movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieList movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home