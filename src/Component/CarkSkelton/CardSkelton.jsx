import React from 'react'

const CardSkelton = () => {
  return (
    <div className=' h-full w-full'>
        <div className='aspect-w-4 aspect-h-5 '>
            <div className='rounded-t-lg bg-gray-500'  ></div>
        </div>
        <div>
            <div className="h-2.5  w-32 mx-2 my-4 bg-gray-200 rounded-full dark:bg-gray-500 "></div>
            <div className="h-2 mx-2 my-3 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
            <div className="h-2 mx-2 my-3 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
        </div>
    </div>
  )
}

export default CardSkelton
