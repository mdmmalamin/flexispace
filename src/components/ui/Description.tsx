import { TUiProps } from "../../types/TUiProps";

const Description = ({ children, className }: TUiProps) => {
  return (
    <p className={`text-xs xs:text-sm md:text-base text-light ${className}`}>
      {children}
    </p>
  );
};

export default Description;
