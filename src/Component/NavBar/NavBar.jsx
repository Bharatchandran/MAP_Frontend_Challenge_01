import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = ({showMarkedActive, setShowMarkedActive}) => {
  return (
    
    <nav class="flex relative justify-between bg-gray-900 text-white w-screen h-12">
      <div class="px-5 xl:px-12  flex w-full items-center">
        <div class="text-3xl font-bold font-heading" href="#">
          Logo Here.
        </div>
        <div class="hidden absolute left-0 right-0 mx-auto w-[200px] md:flex px-4  font-semibold font-heading space-x-12">
            <button className='hover:text-red-500'
                onClick={() => setShowMarkedActive(false)}
             >
                Home
            </button>
            <button onClick={() => setShowMarkedActive(true)}  className='hover:text-red-500'
             >
                Catagory
            </button>
        </div>
      
      </div>
    
    </nav>
    
 
  )
}

export default NavBar
