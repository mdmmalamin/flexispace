import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TItemsProps = { name: string; path: string; icon: ReactNode };

type TMenuProps = {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  items: [TItemsProps];
};

const AvatarMenu = ({ isOpenMenu, setIsOpenMenu, items }: TMenuProps) => {
  return (
    <ul
      className={`${
        isOpenMenu ? "opacity-100" : "opacity-0 scale-0"
      } duration-300 bg-accent rounded-lg absolute top-16 right-0 -z-50`}
    >
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
              className={`flex items-center gap-2 text-nowrap font-semibold px-3 py-2 my-2`}
            >
              {item.icon}

              {item.name}
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AvatarMenu;
