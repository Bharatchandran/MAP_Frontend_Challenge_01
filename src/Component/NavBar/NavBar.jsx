import React from 'react'
import { useState, useEffect } from 'react'

const NavBar = ({showMarkedActive, setShowMarkedActive}) => {
    const [darkMode, setDarkMode] = useState(true)

    const toggleTheme = () => {
      setDarkMode(!darkMode);
    };
    useEffect(() => {
        // adding and removing  "dark" class name to the main document to enable dark mode
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
  
    return (
    
    <nav className="flex relative justify-between bg-[#FFFFFF] dark:bg-[#091E42] text-[#091E42] dark:text-[#F7F8F9] w-screen h-16 p-10">
      <div className="px-5 xl:px-12  flex w-full items-center">
        <div className="text-3xl font-bold font-heading font-lobster tracking-widest " href="#">
          CHALLENGE
        </div>
        <div className="hidden absolute left-0 right-0 mx-auto w-[200px] md:flex px-4  font-semibold font-heading space-x-12  ">
            <button 
            className={`hover:text-red-500 ${!showMarkedActive?"text-red-500":" "} transition-transform duration-300 transform hover:scale-125`}
            onClick={() => setShowMarkedActive(false)}
             >
                Home
            </button>
            <button  
            className={`hover:text-red-500 ${showMarkedActive?"text-red-500":" "} transition-transform duration-200 transform hover:scale-125`}
            onClick={() => setShowMarkedActive(true)}  
             >
                Saved
            </button>
        </div>
      
      </div>
      <button
       onClick={toggleTheme}
       className="relative w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full focus:outline-none  "
      >
        <span
        className={`absolute top-0 left-0 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-full' : 'translate-x-0'}`}
        />
      </button>
    
    </nav>
    
 
  )
}

export default NavBar
