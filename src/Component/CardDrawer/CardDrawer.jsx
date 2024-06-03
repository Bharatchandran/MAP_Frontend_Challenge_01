import { useRef, useState } from "react"
import cardData from "../../cardData.json"
import Card from "../Card/Card";
import img1 from "../../assets/IMG_7660.JPG"
function CardDrawer() {
  const [drawerHover, setDrawerHover] = useState(false)
  const containerRef = useRef(null);

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
    //   containerRef.current.scrollLeft += subContainerWidth;
    containerRef.current.scrollBy({
        left: subContainerWidth,
        behavior: 'smooth'
      });
    }
  };
  return (
   

     <div onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave} className=" h-full w-full flex items-center justify-center p-24">
      {
        drawerHover? <button className=" opacity-25 hover:opacity-75 h-10 w-10 bg-black absolute z-10 left-10  rounded-md flex items-center justify-center" onClick={scrollLeft}>
        <span className="material-symbols-outlined text-white">
            arrow_back_ios
        </span>
    </button> :
    ""
      }
        
        
        <div className="w-full h-full p-4 flex gap-4 overflow-x-auto overflow-y-hidden snap-x  " ref={containerRef}>
        
            {cardData.map((data) => (
                <Card
                key={data.id}
                title={data.title}
                description={data.description}
                image={img1}
                tag={data.tag}
                />
            ))
            }
            
        </div>
        {
        drawerHover?  <button className=" opacity-25 hover:opacity-75 h-10 w-10 bg-black absolute z-10 right-10 rounded-md flex items-center justify-center" onClick={scrollRight}>
        <span className="text-white material-symbols-outlined">
        arrow_forward_ios
        </span>
    </button> :
    ""
      }
        
    </div>
    
  )
}

export default CardDrawer
