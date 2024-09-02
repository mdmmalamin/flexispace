import { TUiProps } from "../../types/TUiProps";

const Title = ({ children, className }: TUiProps) => {
  return (
    <h2
      className={`text-2xl md:text-4xl lg:text-5xl font-semibold capitalize text-center text-dark ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
