import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div
      className={`max-w-[1280px] mx-auto px-2.5 lg:px-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
