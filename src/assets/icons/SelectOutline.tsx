import { TSvgProps } from "../../types/TUiProps";

const SelectOutline = ({ size = "size-6", className }: TSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={`${size} ${className}`}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 2h20v20H2zm3 11l5 4l9-11"
      ></path>
    </svg>
  );
};

export default SelectOutline;
