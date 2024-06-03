import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './assets/components/nav/Navbar'
import Hero from './assets/components/home/Hero'
import Footer from './assets/components/home/Footer'
import About from './assets/components/home/About'


function App() {

  return (
    <>

    <BrowserRouter>
    <Navbar />




      <Routes>
         <Route path="/hero" element={<Hero />} />
         <Route path="/footer" element={<Footer />} />
         <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
