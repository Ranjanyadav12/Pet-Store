import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav'
import Menu from './Component/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Menu/>
    </>
  )
}

export default App
