import React, { useState, useEffect } from 'react'
import Layout from './Component/Layout/Layout'
import Home from './Pages/Home/Home'
import MarkedLaterPage from './Pages/MarkedLaterPage/MarkedLaterPage'
import NavBar from './Component/NavBar/NavBar'
import CardDrawer from './Component/CardDrawer/CardDrawer'

const App = () => {
  const [markedForLater, setMarkedForLater] = useState([])
  const [showMarkedActive, setShowMarkedActive] = useState(false)
 

  return (
   <div className='min-h-screen bg-gray-200  dark:bg-[#101214]'>
   <NavBar showMarkedActive={showMarkedActive} setShowMarkedActive={setShowMarkedActive} />
    <h1 className=' font-lobster text-7xl text:[#161A1D] dark:text-[#DEE4EA]  font-bold text-center my-12'>MAP Frontend Challenge 1</h1>
   <CardDrawer showMarkedActive={showMarkedActive} />
   </div>
  )
}

export default App
