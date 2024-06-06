import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardTag from '../CardTag/CardTag'
import CardSkelton from '../CarkSkelton/CardSkelton'
import { markForLater, removeMarkedForLater } from '../../store/markerSlice'

const Card = ({id,title, description, image, tag }) => {
    
    const [loading, setLoading] = useState(true) // to load the card Skelton
    const [isHovered, setIsHovered] = useState(false);  // to check if pointer is hovering the card 
    const dispatch = useDispatch()
    const marked = useSelector(state => state.markedForLater.marked) // to get the saved for later cards
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    }; 
    const handleMarkForLater = (cardId) => {
        dispatch(markForLater(cardId))
    }
    const handleRemoveMarkForLater = (cardId) => {
        dispatch(removeMarkedForLater(cardId))
    }

    useEffect(() => {
        // set loading to false when image is loaded
        const img = new Image();
        img.src = `src/assets/images/${image}`;
        img.onload = () => {
          setTimeout(() => setLoading(false), 1000); // Delay for 1 second
        };
    }, [image]);
    
    return (
        <div className={`  relative flex-shrink-0 w-[70%] xs-[50%] sm:w-[40%] lg:w-[30.5%] xl:w-[19%] rounded-lg text-[#DEE4EA] dark:text-[#101214] border-black  shadow bg-[#254336] dark:bg-[#B7B597] snap-center ${loading? "animate-pulse":""}  transition-transform duration-300 transform hover:scale-105  `}>
            {loading ? 
                <CardSkelton />
            : 
                <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} 
                className=' relative aspect-h-6  w-full flex flex-col  '
                >
                    <div className={` ${isHovered ? " h-full opacity-20 rounded-lg aspect-w-4  " : "aspect-w-4 aspect-h-5  "} `}>
                        <img className='rounded-t-lg  ' src={`src/assets/images/${image}`} onError={(e) => e.target.src ="src/assets/SamplePic01.jpg"}  alt="" />
                        
                    </div>
                     <div className={`${isHovered?"absolute   top-16 left-2  ":"overflow-hidden"} p-3  flex flex-wrap h-[120px]  `}>
                        <h2 className={`${isHovered?"text-2xl lg:text-2xl  xl:text-2xl ":"text-lg"}  mb-2  font-bold tracking-tighter font-roboto  `}>
                            {/* to hide the extra length of the heading */}
                            {title.length > 40  ? !isHovered?title.slice(0,40)+"..." : title.slice(0,50)+"..." : title} 
                        </h2>
                        <p className={`${isHovered?"text-lg lg:text-xl  xl:text-xl  ":"text-sm"} font-roboto `}>
                            {/* to hide the extra length of the description */}
                            {description.length > 100 ? !isHovered?description.slice(0,80)+"..." : description.slice(0,150)+"..." : description} 
                        </p>
                    </div> 
                    {
                        tag ?
                            <div className={`absolute top-2 right-2 `}>
                                {/* shows weather product is trending, recommended, etc */}
                                <CardTag tag={tag}  />
                            </div>
                            
                        : ""
                    }
                    {
                        isHovered ?  
                            <div className="absolute left-2 top-2 ">
                                {   
                                    marked.some(el => el.markedId === id) ? 
                                        // if the product is saved for later and is hovered
                                        <button 
                                        onClick={() => handleRemoveMarkForLater(id)} 
                                        className="w-10"
                                        >
                                        <img src="src/assets/icons/bookmark.png" alt="" />
                                        </button>
                                    :
                                        // if the product is not saved for later and is hovered
                                        <button 
                                        onClick={() => handleMarkForLater(id)} 
                                        className=" w-10">
                                        <img  src="src/assets/icons/bookmark-white.png" alt="" />
                                        </button>
                                }
                        
                            </div>
                        :
                            <div className={`absolute left-2 top-2 `}>
                                { 
                                    marked.some(el => el.markedId === id) ? 
                                        // if the product is saved for later and not hovered
                                        <button  className="w-10">
                                            <img src="src/assets/icons/bookmark.png" alt="" />
                                        </button>
                                    :
                                        // if the product is not saved for later and not hovered
                                        <button  className=" w-10">
                                            <img src="src/assets/icons/bookmark-white.png" alt="" />
                                        </button>
                                }
                            </div>
                    }
                </div>
            }
        </div>
  )
}

export default Card
