import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from './Home'
import About from './About'
import Hooks from './Hooks'
import NoPageFound from './NoPageFound'

export default function Frontend() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/hooks/*' element={<Hooks />} />
        <Route path='*' element={<NoPageFound />} />
      </Routes>
      <Footer />
    </>
  )
}
