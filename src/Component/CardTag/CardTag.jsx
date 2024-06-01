import React, { useEffect, useState } from 'react'
const CardTag = ({tag}) => {
    const [selectTag, letSelectTag] = useState({
        color: "",
        icon: ""
    })

    useEffect( () => {
        switch (tag) {
            case 'Recommended':
                letSelectTag({
                    color: "green",
                    icon: "reviews"
                })
                break
            case 'Trending':
                letSelectTag({
                    color: "red",
                    icon: "trending_up"
                })
                break
            case 'Ads':
                letSelectTag({
                    color: "yellow",
                    icon: "sell"
                })
                break
            default:
                letSelectTag({
                    color: "blue",
                    icon: ""
                })
                
          }
        
    },[tag])
    
    
  return (
    <div>
      <div className={`bg-${selectTag.color}-100 text-${selectTag.color}-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-${selectTag.color}-900 dark:text-white flex items-center justify-between`}>
                     {tag}
                     <span className="material-symbols-outlined text-lg ml-1">
                         {selectTag.icon}
                     </span>
                 </div>
    </div>
  )
}

export default CardTag
