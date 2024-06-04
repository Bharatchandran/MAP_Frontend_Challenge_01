import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-gray-900 min-h-screen'>
        <NavBar />
        <Outlet /> 
    </div>
  )
}

export default Layout
