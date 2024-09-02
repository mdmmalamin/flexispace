import { TUiProps } from "../../types/TUiProps";

const Button = ({ children, className, onClick, icon }: TUiProps) => {
  return (
    <button
      className={`font-sans flex justify-center gap-2 items-center mx-auto shadow-lg text-base sm:text-lg bg-light backdrop-blur-md font-bold isolation-auto border-light before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-secondary hover:text-dark before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group ${className}`}
      type="submit"
      onClick={onClick}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
