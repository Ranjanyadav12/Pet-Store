import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav'
import Menu from './Component/Menu/Menu'
import Hero from './Component/Hero/Hero'
import Features from './Component/Features/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Menu/>
     <Hero/>
     <Features/>
    </>
  )
}

export default App
