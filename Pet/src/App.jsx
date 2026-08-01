import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav'
import Menu from './Component/Menu/Menu'
import Hero from './Component/Hero/Hero'
import Features from './Component/Features/Features'
import ShopByPet from './Component/Shop by pet/Shopbypet'
import Footer from './Component/Footer/Footer'
import Testimonial from './Component/Testimonial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Menu/>
     <Hero/>
     <Features/>
     <ShopByPet/>
     <Testimonial/>
     <Footer/>
    </>
  )
}

export default App
