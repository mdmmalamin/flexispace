import { TSvgProps } from "../../types/TUiProps";

const ScheduleOutline = ({ size = "size-6", className }: TSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${size} ${className}`}
    >
      {/* Calendar Outline */}
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />

      {/* Clock Circle */}
      <circle cx="12" cy="16" r="4" />
      {/* Clock Hands */}
      <path d="M12 14v2l1 1" />
    </svg>
  );
};

export default ScheduleOutline;
