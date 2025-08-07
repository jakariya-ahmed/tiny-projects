import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
