// import { useRef } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './assets/Navbar'

function App() {
  // const some = 1;


  return (
    <>
    <div>
      <div className='z-30 bg-black w-full top-0 absolute'>
        <Navbar />
      </div>

      <div className='absolute'>
        <Home />
      </div>
    </div>
    </>
  )
}

export default App
