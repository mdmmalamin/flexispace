import { Link } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";
import Description from "../ui/Description";
import { socialLinks } from "../../routes/footer.routes";

const LogoDetails = () => {
  return (
    <>
      <Link to="/" onClick={scrollToTop}>
        <span className="text-white font-extrabold text-2xl border px-2.5 bg-secondary/15">
          FlexiSpace
        </span>
      </Link>

      <Description className="text-justify !text-white">
        We work with a passion of taking challenges and creating new ones in
        advertising sector.
      </Description>

      <div className="flex gap-4 md:gap-6 justify-start items-center">
        {socialLinks?.map((item, idx) => (
          <Link to={item?.link} target="_blank" key={idx}>
            <img
              className="size-8 sm:size-10 p-1 hover:bg-secondary/50 shadow-center rounded-full hover:scale-110 duration-300"
              src={item?.icon}
              alt={`Icon of ${item?.title}.`}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default LogoDetails;
