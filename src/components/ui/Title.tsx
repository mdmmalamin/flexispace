import { TUiProps } from "../../types/TUiProps";

const Title = ({ children, className }: TUiProps) => {
  return (
    <h2
      className={`text-xl md:text-2xl lg:text-3xl font-semibold capitalize text-center text-dark ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
