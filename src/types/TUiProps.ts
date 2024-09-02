import { ReactNode } from "react";

export type TUiProps = {
  children: ReactNode;
  className?: string;
  style?: object;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
