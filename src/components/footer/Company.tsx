import { Link } from "react-router-dom";
import { companyRoutes } from "../../routes/footer.routes";
import scrollToTop from "../../utils/scrollToTop";

const Company = () => {
  return (
    <>
      <h4 className="text-left text-white text-xl font-bold">Company</h4>

      <ul className="text-nowrap space-y-1">
        {companyRoutes?.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item?.path}
              className="text-light hover:underline underline-offset-4 font-medium hover:text-secondary transition duration-300"
              onClick={scrollToTop}
            >
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Company;
