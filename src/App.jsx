import React, { useState } from 'react'
import Layout from './Component/Layout/Layout'
import Home from './Pages/Home/Home'
import MarkedLaterPage from './Pages/MarkedLaterPage/MarkedLaterPage'
import NavBar from './Component/NavBar/NavBar'
import CardDrawer from './Component/CardDrawer/CardDrawer'

const App = () => {
  const [markedForLater, setMarkedForLater] = useState([])
  const [showMarkedActive, setShowMarkedActive] = useState(false)
  return (
   <div className='min-h-screen bg-gray-900'>1
   <NavBar showMarkedActive={showMarkedActive} setShowMarkedActive={setShowMarkedActive} />
   <CardDrawer showMarkedActive={showMarkedActive} />
   </div>
  )
}

export default App
