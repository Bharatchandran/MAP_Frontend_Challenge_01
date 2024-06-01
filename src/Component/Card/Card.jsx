import React, { useEffect, useState } from 'react'
import CardTag from '../CardTag/CardTag'
const CardF = ({title, description, image, tag }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          setTimeout(() => setLoading(false), 1000); // Delay for 1 second
        };
      }, [image]);
    return (
     
        <div className={`relative flex-shrink-0 w-[32%] lg:w-[19.2%] rounded-lg border shadow bg-gray-100 snap-center ${loading? "animate-pulse":""} `}>
        {loading ? 
            <div className=' h-full w-full'>
                 <div className='aspect-w-4 aspect-h-5 '>
            <div className='rounded-t-lg bg-gray-500'  ></div>
        </div>
        <div>
            {/* <h2 className='mb-2 text-sm font-bold tracking-tighter text-gray-900 dark:text-black'>
                
            </h2> */}
            <div class="h-2.5  w-32 mx-2 my-4 bg-gray-200 rounded-full dark:bg-gray-500 "></div>
            <div class="h-2 mx-2 my-3 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
            <div class="h-2 mx-2 my-3 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
            <div class="h-2 mx-2 my-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            {
                tag?
                    <div className='absolute top-2 right-0 text-xs'>
                        <CardTag tag={tag} />
                    </div>
                :""
            }
        </div>
{/*  */}
    </div>
        : 
           <div className=' h-full w-full '>
            <div className='aspect-w-4 aspect-h-5'>
            <img className='rounded-t-lg' src={image} alt="" />
        </div>
        <div>
            <h2 className='mb-2 text-sm font-bold tracking-tighter text-gray-900 dark:text-black'>
                {title}
            </h2>
            <p className='text-xs'>
                {description.length > 100 ? description.slice(0,100)+"..." : description}
            </p>
            {
                tag?
                    <div className='absolute top-2 right-0 text-xs'>
                        <CardTag tag={tag} />
                    </div>
                :""
            }
        </div> 
        </div>
            
            }
        
        </div>
    
  )
}

export default CardF
