import React from 'react'
import adsIcon from "../../assets/advertisement.png"
const CardTag = ({tag}) => {
    const getTag = (tag) => {

        switch (tag) {
            case 'Recommended':
                return <div className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-green-900 dark:text-white flex items-center justify-between">{tag}   
                    <span className="material-symbols-outlined ">
                        reviews
                    </span>
                </div>;
            case 'Trending':
                return <div className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-red-900 dark:text-white flex items-center justify-between">
                    {tag}  
                    <span className="material-symbols-outlined ">
                    trending_up
                    </span> 
                </div>
            case 'Ads':
                return <div className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-white flex items-center justify-between">
                    {tag}
                    <span className="material-symbols-outlined">
                        sell
                    </span>
                </div>;
            default:
                return <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {tag}
                </span>;
          }
    }

  return (
    <div>
      {
        getTag(tag)
      }
    </div>
  )
}

export default CardTag
