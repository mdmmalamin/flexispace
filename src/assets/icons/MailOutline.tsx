import { TSvgProps } from "../../types/TUiProps";

const MailOutline = ({ size = "size-6", className }: TSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={`${size} ${className}`}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path
          strokeDasharray={64}
          strokeDashoffset={64}
          d="M6 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          ></animate>
        </path>
        <path
          strokeDasharray={36}
          strokeDashoffset={36}
          d="M19 23h-17c-0.55 0 -1 -0.45 -1 -1v-13"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.3s"
            dur="0.3s"
            values="36;0"
          ></animate>
        </path>
        <path
          strokeDasharray={24}
          strokeDashoffset={24}
          d="M5 6.5l9 5.5l9 -5.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="24;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
};

export default MailOutline;
