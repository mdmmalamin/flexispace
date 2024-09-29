import { NavLink } from "react-router-dom";
import CloseOutline from "../../assets/icons/CloseOutline";
import OpenOutline from "../../assets/icons/OpenOutline";
import { ReactNode, useEffect, useState } from "react";

type TItemsProps = { name: string; path: string; icon: ReactNode };

type TSideBarProps = {
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  items: [TItemsProps];
};

const Sidebar = ({ isOpenSidebar, setIsOpenSidebar, items }: TSideBarProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  console.log([screenWidth, isOpenSidebar]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (screenWidth >= 764) {
      () => setIsOpenSidebar(!isOpenSidebar);
    } else {
      () => setIsOpenSidebar(!isOpenSidebar);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpenSidebar, setIsOpenSidebar, screenWidth]);

  return (
    <aside
      className={`${
        isOpenSidebar ? "w-12" : "w-72"
      } z-20 bg-accent/20 transition-all duration-300 fixed top-20 left-0 h-fit`}
    >
      <button
        className="py-2.5 px-1 flex justify-end w-full bg-white"
        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
      >
        {isOpenSidebar ? (
          <OpenOutline />
        ) : (
          <>
            <h1 className="w-full text-left text-2xl font-bold">Flexispace</h1>

            <CloseOutline />
          </>
        )}
      </button>

      <ul className="">
        {items?.map((item: TItemsProps, idx: number) => (
          <li key={idx}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary text-primary" : "bg-primary/10"
                } rounded-md hover:bg-primary hover:text-white duration-300`
              }
            >
              <div
                className={`flex items-center gap-5 w-full font-semibold ${
                  isOpenSidebar ? "scale-110" : ""
                } px-3 py-2 my-2`}
              >
                {item.icon}

                <p
                  className={`${
                    isOpenSidebar ? "hidden" : "block text-nowrap"
                  }`}
                >
                  {item.name}
                </p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
