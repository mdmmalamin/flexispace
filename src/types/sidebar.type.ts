import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TSidebarItem =
  | {
      name: string;
      path: ReactNode;
      children?: TSidebarItem[];
      icon?: ReactNode;
    }
  | undefined;

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
  icon?: ReactNode;
};
