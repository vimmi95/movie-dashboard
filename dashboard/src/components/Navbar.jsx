import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            {/* the link works as a a tag in js */}
            <Link to="/">Movie App</Link> 
        </div> 
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/fav" className="nav-link">Favourite Movies</Link>
        </div>
    </nav>
}

export default NavBar