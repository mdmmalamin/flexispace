import { ReactNode } from "react";

type TTitleProps = {
  children: ReactNode;
  className?: string;
};

const Title = ({ children, className }: TTitleProps) => {
  return (
    <h2
      className={`text-2xl md:text-4xl lg:text-5xl font-semibold capitalize text-center text-dark ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
