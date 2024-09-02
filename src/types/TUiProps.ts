import { ReactNode } from "react";

export type TUiProps = {
  children: ReactNode;
  className?: string;
  style?: object;
  icon?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type TSvgProps = { size?: string; className?: string };
