import React, { useEffect, useState } from 'react'
import CardTag from '../CardTag/CardTag'
import CardSkelton from '../CarkSkelton/CardSkelton'
const Card = ({title, description, image, tag }) => {
    const [loading, setLoading] = useState(true)
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
          setTimeout(() => setLoading(false), 1000); // Delay for 1 second
        };
      }, [image]);
    return (
     
        <div   className={`min-h-20  relative flex-shrink-0 w-[60%] xs-[50%] sm:w-[40%] lg:w-[30.5%] xl:w-[20%] rounded-lg border shadow bg-gray-100 snap-center ${loading? "animate-pulse":""}  transition-transform duration-300 transform hover:scale-105  `}>
            {loading ? 
                <CardSkelton />
            : 
                <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} className=' relative h-full w-full flex flex-col  '>
                    <div className={` ${isHovered ? "w-full h-full opacity-20 rounded-lg aspect-w-4 " : "aspect-w-4 aspect-h-5  "} `}>
                        <img className='rounded-t-lg  ' src={image} alt="" />
                    </div>
                <div className={`${isHovered?"absolute  top-12 left-2  ":"overflow-hidden"} p-3 h-[115px] flex flex-wrap  `}>
                    
                     <h2 className='mb-2 text-sm font-bold tracking-tighter text-gray-900 dark:text-black'>{title.length > 40  ? !isHovered?title.slice(0,40)+"..." : title.slice(0,50)+"..." : title}</h2>
                    
                    <p className='text-xs'>{description.length > 100 ? !isHovered?description.slice(0,80)+"..." : description.slice(0,150)+"..." : description} </p>
                </div> 
                    {
                        tag?
                            <div className={`absolute ${isHovered?"top-5 left-4" : "top-2 right-0"} `}>
                                <CardTag tag={tag} isHovered={isHovered} />
                            </div>
                        :""
                    }
                </div>
               

                
            }


        
        </div>
    
  )
}

export default Card
