import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Contact from './Contact'

export default function Dashbord() {
  return (

    <>
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}
