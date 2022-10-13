import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Hero, Navbar, ImageCarousel} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <Navbar / >
      <Hero />
      <ImageCarousel />
      
    </div>
  )
}

export default App
