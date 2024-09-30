import { Link } from "react-router-dom";
import { verifyToken } from "../../../utils/verifyToken";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentToken } from "../../../redux/features/auth/authSlice";
import AvatarSolid from "../../../assets/icons/AvatarSolid";
import { useState } from "react";
import AvatarMenu from "./AvatarMenu";
import { sidebarItemGenerator } from "../../../utils/sidebarItemGenerator";
import { adminRoutes } from "../../../routes/admin.routes";

const UserAvatar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }
  return (
    <>
      {user ? (
        <button
          className="text-nowrap col-span-6 md:col-span-3 justify-self-end !hidden md:!block text-white font-semibold cursor-pointer relative"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <AvatarSolid />

          <AvatarMenu
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
            items={sidebarItemGenerator(adminRoutes, "admin")}
          />
        </button>
      ) : (
        <Link
          to="login"
          className="text-nowrap col-span-6 md:col-span-3 justify-self-end !hidden md:!block text-white font-semibold"
        >
          Login
        </Link>
      )}
    </>
  );
};

export default UserAvatar;
