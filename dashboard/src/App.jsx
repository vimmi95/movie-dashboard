import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/MovieList'
import Home from "./pages/home"

function App() {


  return (
    <> 
    {/* <MovieList movie={{title:"Titanic" , release_date:"2025-02-30"}}></MovieList> */}
    <Home></Home>
    </>
  )
}

// function Text({name}) {
//   return(
//     <div>
//   <p>Hello {name} !!</p>
// </div>
//   );
// }

export default App
