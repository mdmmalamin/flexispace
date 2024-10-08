import { Link, NavLink } from "react-router-dom";
import scrollToTop from "../../../utils/scrollToTop";
import { useEffect, useState } from "react";

import menu from "../../../assets/icons/menu.svg";
import close from "../../../assets/icons/close.svg";
import Container from "../../ui/Container";
import { manus } from "../../../routes/menu.routes";
import NavLogo from "./NavLogo";
import UserAvatar from "./UserAvatar";

const NavContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    if (!isOpen) document.body.style.overflow = "scroll";
  }, [isOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 shadow-lg shadow-primary/10 bg-primary backdrop-blur-3xl">
        <Container className="grid gap-4 grid-cols-12 justify-items-center content-center items-center bg-primary py-2.5 md:py-5">
          <NavLogo />

          {/* Desktop Device */}
          <div className="col-span-6 hidden md:block text-nowrap">
            <div className="flex gap-2.5 justify-between items-center text-lg font-semibold">
              {manus?.map((item, idx) => (
                <NavLink
                  to={item?.path}
                  key={idx}
                  className={`border-secondary  border-transparent text-light py-2 px-5 hover:bg-primary/10 border-b hover:border-secondary hover:text-secondary transition duration-300`}
                  onClick={scrollToTop}
                >
                  {item?.name}
                </NavLink>
              ))}
            </div>
          </div>

          <UserAvatar />

          {/* Mobile Menu Icon */}
          <div className="col-span-6 justify-self-end self-center !block md:!hidden">
            <button
              className={` ${
                isOpen ? "duration-300 rotate-180" : "duration-100"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <img className="size-10" src={(isOpen && close) || menu} />
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Items */}
      <div
        className={`w-full h-screen border-t-2 border-secondary bg-primary backdrop-blur-3xl fixed top-[66px] duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="w-full my-12 flex flex-col gap-2.5 justify-center items-center text-lg font-semibold">
          {manus?.map((item, idx) => (
            <NavLink
              to={item?.path}
              key={idx}
              className="w-1/2 text-center text-light py-2 px-5 bg-secondary/20 hover:bg-secondary/10 hover:text-secondary hover:underline underline-offset-4 transition duration-300"
              onClick={scrollToTop}
            >
              {item?.name}
            </NavLink>
          ))}
        </div>

        <div className="w-full text-center my-6">
          <button className="text-nowrap mx-auto">
            <Link
              to="login"
              className="text-nowrap col-span-6 md:col-span-3 justify-self-end !block md:!hidden text-white font-semibold"
            >
              Login
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavContainer;
