import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav'
import Menu from './Component/Menu/Menu'
import Hero from './Component/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Menu/>
     <Hero/>
    </>
  )
}

export default App
