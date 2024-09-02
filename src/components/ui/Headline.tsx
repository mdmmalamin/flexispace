import { TUiProps } from "../../types/TUiProps";

const Headline = ({ children, className }: TUiProps) => {
  return (
    <h1
      className={`text-2xl xs:text-4xl md:text-5xl font-bold capitalize text-center ${className}`}
    >
      {children}
    </h1>
  );
};

export default Headline;
