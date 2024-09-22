import NavContainer from "../shared/header/NavContainer";
import { Outlet } from "react-router-dom";
import FooterContainer from "../shared/footer/FooterContainer";

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
