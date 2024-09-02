import { TUiProps } from "../../types/TUiProps";

const Container = ({ children, className, style }: TUiProps) => {
  return (
    <div
      className={`max-w-[1280px] mx-auto px-2.5 lg:px-0 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
