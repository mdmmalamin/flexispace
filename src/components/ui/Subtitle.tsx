import { TUiProps } from "../../types/TUiProps";

const Subtitle = ({ children, className }: TUiProps) => {
  return (
    <h2
      className={`text-sm xs:text-base sm:text-lg font-medium capitalize text-light text-center text-shadow ${className}`}
    >
      {children}
    </h2>
  );
};

export default Subtitle;
