import { TSvgProps } from "../../types/TUiProps";

const ScheduleOutline = ({ size = "size-6", className }: TSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      className={`${size} ${className}`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 20H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v3M8 2v2m7-2v2M2 8h19m-2.5 7.643l-1.5 1.5"></path>
        <circle cx={17} cy={17} r={5}></circle>
      </g>
    </svg>
  );
};

export default ScheduleOutline;
