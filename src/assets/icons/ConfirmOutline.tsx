import { TSvgProps } from "../../types/TUiProps";

const ConfirmOutline = ({ size = "size-6", className }: TSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={`${size} ${className}`}
    >
      <mask id="lineMdConfirmCircleFilled0">
        <g
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <path
            fill="#fff"
            fillOpacity={0}
            strokeDasharray={64}
            strokeDashoffset={64}
            d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"
          >
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="0.6s"
              dur="0.5s"
              values="0;1"
            ></animate>
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="64;0"
            ></animate>
          </path>
          <path
            stroke="#000"
            strokeDasharray={16}
            strokeDashoffset={16}
            d="M8 12l3 3l5 -5"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="1.1s"
              dur="0.2s"
              values="16;0"
            ></animate>
          </path>
        </g>
      </mask>
      <rect
        width={24}
        height={24}
        fill="currentColor"
        mask="url(#lineMdConfirmCircleFilled0)"
      ></rect>
    </svg>
  );
};

export default ConfirmOutline;
