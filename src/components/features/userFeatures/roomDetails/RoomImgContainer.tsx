import { useRef } from "react";
import img from "../../../../assets/images/hero.png";
import img2 from "../../../../assets/images/our_story.jpg";
import img3 from "../../../../assets/images/our_story_card.jpg";
import img4 from "../../../../assets/images/our_story_card.jpg";
import img5 from "../../../../assets/images/our_story_card.jpg";
import ArrowOutline from "../../../../assets/icons/ArrowOutline";

const RoomImgContainer = () => {
  const imgs = [img, img2, img3, img4, img5];

  // Use a ref to reference the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to handle scrolling
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount, // Adjust the scroll distance as needed
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <>
      <div className="col-span-1 sm:col-span-3 w-full p-6">
        <div className="grid grid-cols-12 gap-3">
          {imgs?.map((item, idx) => (
            <div
              key={idx}
              className={`
                ${idx === 0 && "col-span-full h-96 overflow-hidden"} 
                ${idx === 1 && "col-span-6 h-24"} 
                ${idx === 2 && "col-span-6 h-24"}
                ${idx >= 3 && "hidden"}`}
            >
              <img
                className="w-full h-full object-cover object-center"
                src={item}
                alt={`Picture of ${item}.`}
              />
            </div>
          ))}
        </div>

        <div className="relative w-full h-20 p-2 my-3 bg-accent/20 border border-accent/30 shadow-sm rounded-md overflow-hidden">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10"
          >
            <ArrowOutline className="bg-gray-400 hover:bg-accent border-none !rotate-[270deg]" />
          </button>

          {/* Scrollable Image Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center justify-around h-16 gap-3 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {imgs?.map((item, idx) => (
              <img
                className="w-fit h-full object-cover object-center"
                // className=""
                src={item}
                alt={`Picture of ${item}.`}
                key={idx}
              />
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full z-10"
          >
            <ArrowOutline className="bg-gray-400 hover:bg-accent border-none !rotate-90" />
          </button>
        </div>
      </div>
    </>
  );
};

export default RoomImgContainer;
