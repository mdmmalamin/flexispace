import { TSvgProps } from "../../types/TUiProps";

const ArrowOutline = ({ className, fill = "fill-dark" }: TSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 19"
      className={`w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-light text-light ease-linear duration-300 rounded-full border border-dart/75 group-hover:border-none p-2 rotate-45 ${className}`}
    >
      <path
        className={`${fill} group-hover:fill-dark`}
        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      ></path>
    </svg>
  );
};

export default ArrowOutline;
