import { useRef } from "react"
import cardData from "../../cardData.json"
import Card from "../Card/Card";
import img1 from "../../assets/IMG_7660.JPG"
function CardDrawer() {

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      const subContainerWidth = (containerRef.current.children[0].offsetWidth +16 )* 5; // Assuming all sub-containers have the same width
    //   containerRef.current.scrollLeft -= subContainerWidth; // Scroll one sub-container width to the left
      containerRef.current.scrollBy({
        left: -subContainerWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const subContainerWidth = (containerRef.current.children[0].offsetWidth +16 )* 5; // Assuming all sub-containers have the same width
    //   containerRef.current.scrollLeft += subContainerWidth;
    containerRef.current.scrollBy({
        left: subContainerWidth,
        behavior: 'smooth'
      });
    }
  };
  return (
   

     <div className=" h-full w-full flex">
      
      <button className=" rounded-md" onClick={scrollLeft}>
        <span className="material-symbols-outlined">
          arrow_back_ios
        </span>
      </button>
      
      <div className="w-full  max-h-[500px] flex gap-4 overflow-x-auto snap-x " ref={containerRef}>
      
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
        
      <button className=" rounded-md" onClick={scrollRight}>
        <span className="material-symbols-outlined">
          arrow_forward_ios
        </span>
      </button>
    </div>
    
  )
}

export default CardDrawer
