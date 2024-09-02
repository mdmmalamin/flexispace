import { TSvgProps } from "../../types/TUiProps";

const ChevronDownOutline = ({ size = "size-6", className }: TSvgProps) => {
  return (
    <svg
      className={`${size} ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export default ChevronDownOutline;
