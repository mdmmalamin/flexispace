import { Link } from "react-router-dom";
import scrollToTop from "../../../utils/scrollToTop";

const NavLogo = () => {
  return (
    <Link
      to="/"
      className="col-span-6 md:col-span-3 justify-self-start my-auto"
      onClick={scrollToTop}
    >
      <span className="text-white font-extrabold text-2xl border px-2.5 bg-secondary/15">
        FlexiSpace
      </span>
    </Link>
  );
};

export default NavLogo;
