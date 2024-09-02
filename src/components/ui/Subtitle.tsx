import { TUiProps } from "../../types/TUiProps";

const Subtitle = ({ children, className }: TUiProps) => {
  return (
    <h3
      className={`text-sm xs:text-base font-medium capitalize text-accent text-center ${className}`}
    >
      {children}
    </h3>
  );
};

export default Subtitle;
