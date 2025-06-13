import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieList from './components/MovieList'
import Home from "./pages/Home"
import { Routes,Route } from 'react-router-dom'
import Favorite from './pages/Favorite'
import NavBar from './components/Navbar'

function App() {

  return (
    <div>
      <NavBar/>    
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home />}/>
         <Route path='/fav' element={<Favorite />}/>
      </Routes>
    </main>
    </div>
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
