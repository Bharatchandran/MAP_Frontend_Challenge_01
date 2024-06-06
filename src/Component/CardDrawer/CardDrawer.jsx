import { useRef, useState } from "react"
import cardData from "../../cardData.json"
import Card from "../Card/Card";
import { useSelector } from "react-redux";
function CardDrawer({showMarkedActive}) {
  const [drawerHover, setDrawerHover] = useState(false) // to show the scroll arrow
  const containerRef = useRef(null);  // referencing the container to scroll
  const marked = useSelector(state => state.markedForLater.marked)
  const handleMouseEnter = () => {
    setDrawerHover(true);
  };
  const handleMouseLeave = () => {
      setDrawerHover(false);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      const subContainerWidth = (containerRef.current.children[0].offsetWidth +16 )* 2; // Assuming all sub-containers have the same width
    //   containerRef.current.scrollLeft -= subContainerWidth; // Scroll one sub-container width to the left
      containerRef.current.scrollBy({
        left: -subContainerWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const subContainerWidth = (containerRef.current.children[0].offsetWidth +16 )* 2; // Assuming all sub-containers have the same width
      // containerRef.current.scrollLeft += subContainerWidth;
      containerRef.current.scrollBy({
          left: subContainerWidth,
          behavior: 'smooth'
      });
    }
  };
  return (
    <div 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} 
    className="relative  w-full  flex items-center justify-center p-20  " 
    >
      {
        drawerHover ?
          <div> 
            <button 
            className=" opacity-25 hover:opacity-75 h-16 w-16 bg-black dark:bg-white absolute z-10 left-2   rounded-md flex items-center justify-center" 
            onClick={scrollLeft}
            >
              <span className="material-symbols-outlined text-white dark:text-black ">
                  arrow_back_ios
              </span>
            </button>
            <button 
            className=" opacity-25 hover:opacity-75 h-16 w-16 bg-black dark:bg-white absolute z-10 right-2 rounded-md flex items-center justify-center " 
            onClick={scrollRight}
            >
                <span className="text-white dark:text-black material-symbols-outlined">
                  arrow_forward_ios
                </span>
            </button> 
          </div>
        :
          ""
      }
        
        
        <div 
        className="w-full    p-12 flex gap-4 overflow-x-auto overflow-y-hidden" 
        ref={containerRef}
        >
          {showMarkedActive ? 
              cardData.map(data => marked.find(el => el.markedId === data.id ) ? // show all saved for later products
                <Card
                key={data.id}
                id={data.id}
                title={data.title}
                description={data.description}
                image={data.image}
                tag={data.tag}
                /> 
              : "" )
            :
              cardData.map(data => // show all products
                <Card
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  description={data.description}
                  image={data.image}
                  tag={data.tag}
                /> )
          }
        </div>
    </div>
    
  )
}

export default CardDrawer
