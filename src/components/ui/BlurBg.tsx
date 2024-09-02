import { TUiProps } from "../../types/TUiProps";

const BlurBg = ({ children, className }: TUiProps) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md p-2 rounded-md border border-white/20 ${className}`}
    >
      {children}
    </div>
  );
};

export default BlurBg;
