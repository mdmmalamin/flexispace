import { ReactNode } from "react";

type TSubmit = {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  submitType?: "success" | "danger" | "default";
};

const type = {
  success: "success",
  danger: "danger",
  default: "default",
};

const FSSubmit = ({
  children,
  onClick,
  className,
  submitType = "default",
}: TSubmit) => {
  let bg;
  if (submitType === type.success) {
    bg = "bg-green-600 hover:bg-green-600/70";
  } else if (submitType === type.danger) {
    bg = "bg-red-600 hover:bg-red-600/70";
  } else if (submitType === type.default) {
    bg = "!p-2 bg-primary text-white rounded-md hover:bg-primary/80";
  }

  return (
    <button
      className={`${className} ${bg} flex items-center justify-center gap-2 py-2 px-5 duration-300 text-white font-semibold rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FSSubmit;
