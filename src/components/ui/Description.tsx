import { TUiProps } from "../../types/TUiProps";

const Description = ({ children, className }: TUiProps) => {
  return (
    <div className={`text-xs xs:text-sm md:text-base text-accent ${className}`}>
      {children}
    </div>
  );
};

export default Description;
