import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Hero, Navbar, RemitForm} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <Navbar / >
      <RemitForm />
      {/* <Hero /> */}
    </div>
  )
}

export default App
