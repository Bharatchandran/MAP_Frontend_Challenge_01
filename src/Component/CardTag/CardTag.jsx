import React, { useEffect, useState } from 'react'
const CardTag = ({tag, isHovered}) => {
    const [selectTag, letSelectTag] = useState({
        color: "",
        icon: ""
    })
    

    useEffect( () => {
        switch (tag) {
            case 'Recommended':
                letSelectTag({
                    className: "dark:bg-green-900 ",
                    icon: "reviews"
                })
                break
            case 'Trending':
                letSelectTag({
                    className: "dark:bg-red-900",
                    icon: "trending_up"
                })
                break
            case 'Ads':
                letSelectTag({
                    className: "dark:bg-red-900",
                    icon: "sell"
                })
                break
            default:
                letSelectTag({
                    className: "dark:bg-red-900",
                    icon: ""
                })
                
          }
        
    },[tag])
    
    
  return (
    <div>
      <div className={` text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ${selectTag.className} dark:text-white flex items-center justify-between z-20`}>
            <p className='hidden md:block'>{tag}</p>
            <span className={`material-symbols-outlined ${isHovered? "text-xs": "text-lg"} ml-1`}>
                {selectTag.icon}
            </span>
      </div>
    </div>
  )
}

export default CardTag
