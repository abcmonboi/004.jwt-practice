import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Public = () => {
  return (
    <div className="wrapper">
    <Header />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Public