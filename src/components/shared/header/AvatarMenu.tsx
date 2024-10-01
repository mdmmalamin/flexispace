import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logout,
  TUser,
  useCurrentToken,
} from "../../../redux/features/auth/authSlice";
import { verifyToken } from "../../../utils/verifyToken";
import { sidebarItemGenerator } from "../../../utils/sidebarItemGenerator";
import { adminRoutes } from "../../../routes/admin.routes";
import { userRoutes } from "../../../routes/user.routes";
import { TSidebarItem } from "../../../types";
import LogoutSolid from "../../../assets/icons/LogoutSolid";

type TMenuProps = {
  isOpenMenu: boolean;
};

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const AvatarMenu = ({ isOpenMenu }: TMenuProps) => {
  const token = useAppSelector(useCurrentToken);
  const dispatch = useAppDispatch();

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

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ul
      className={`${
        isOpenMenu ? "opacity-100" : "opacity-0 scale-0"
      } duration-300 bg-accent rounded-lg absolute top-16 right-0 -z-50`}
    >
      {sidebarItems?.map((item: TSidebarItem, idx: number) => (
        <li key={idx}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary text-primary" : "bg-primary/50"
              } rounded-md hover:bg-primary hover:text-white duration-300`
            }
          >
            <div
              className={`flex items-center gap-2 text-nowrap font-semibold px-3 py-2 my-2`}
            >
              {item.icon}

              {item.name}
            </div>
          </NavLink>
        </li>
      ))}

      <li className="hover:bg-red-600/80 duration-300" onClick={handleLogout}>
        <div
          className={`flex items-center gap-2 text-nowrap font-semibold px-3 py-2 my-2`}
        >
          <LogoutSolid />
          Logout
        </div>
      </li>
    </ul>
  );
};

export default AvatarMenu;
