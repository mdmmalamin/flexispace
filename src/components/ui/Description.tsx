import { ReactNode } from "react";

type TDescriptionProps = {
  children: ReactNode;
  className?: string;
};

const Description = ({ children, className }: TDescriptionProps) => {
  return (
    <p className={`text-xs xs:text-sm md:text-base text-light ${className}`}>
      {children}
    </p>
  );
};

export default Description;
