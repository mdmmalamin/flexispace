import { NavLink } from "react-router-dom";
import CloseOutline from "../../assets/icons/CloseOutline";
import OpenOutline from "../../assets/icons/OpenOutline";
import { useAppSelector } from "../../redux/hooks";
import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { sidebarItemGenerator } from "../../utils/sidebarItemGenerator";
import { adminRoutes } from "../../routes/admin.routes";
import { userRoutes } from "../../routes/user.routes";
import { TSidebarItem } from "../../types";

type TSideBarProps = {
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }: TSideBarProps) => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemGenerator(adminRoutes, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItems = sidebarItemGenerator(userRoutes, userRole.USER);
      break;
    default:
      break;
  }

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

      <ul>
        {sidebarItems?.map((item: TSidebarItem, idx: number) => (
          <li key={idx}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary text-primary " : "bg-primary/10"
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
