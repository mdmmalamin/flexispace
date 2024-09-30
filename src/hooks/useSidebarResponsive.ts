import { useEffect, useState } from "react";

const useSidebarResponsive = (initialState: boolean) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(initialState);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (screenWidth >= 768) {
      setIsOpenSidebar(false); // Keep the sidebar closed on larger screens by default
    } else {
      setIsOpenSidebar(true); // Open sidebar on smaller screens by default
    }

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return { isOpenSidebar, setIsOpenSidebar, screenWidth };
};

export default useSidebarResponsive;
