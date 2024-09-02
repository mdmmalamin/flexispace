import { ReactNode, useEffect, useState } from "react";
import BlurBg from "./ui/BlurBg";
import ChevronDownOutline from "../assets/icons/ChevronDownOutline";

const Carousel = ({
  children,
  data,
}: {
  children: ReactNode;
  data: number;
}) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? data - 2 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === data - 2 ? 0 : currentSlider + 1
    );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div className="max-w-full min-w-72 mx-auto h-full flex flex-row items-center overflow-hidden gap-5 lg:gap-10 my-5">
      <div className="relative overflow-hidden">
        <div className="absolute size-full flex items-center justify-between z-40 px-5">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center bg-primary hover:bg-primary/50 rounded-full size-6 md:size-8"
          >
            <ChevronDownOutline className="rotate-90" />
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center bg-primary hover:bg-primary/50 rounded-full size-6 md:size-8"
          >
            <ChevronDownOutline className="rotate-[270deg]" />
          </button>
        </div>

        <BlurBg>
          <div
            className="ease-in-out duration-300 flex"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 100 : 50)
              }%)`,
            }}
          >
            {children}
          </div>
        </BlurBg>
      </div>
    </div>
  );
};

export default Carousel;
