import NavContainer from "../header/NavContainer";
import { Outlet } from "react-router-dom";
import FooterContainer from "../footer/FooterContainer";

const MainLayout = () => {
  return (
    <>
      <NavContainer />
      <Outlet />
      <FooterContainer />
    </>
  );
};

export default MainLayout;
