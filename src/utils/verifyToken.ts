import { jwtDecode } from "jwt-decode";
import { TJwt } from "../types/jwt.type";

export const verifyToken = (token: string) => {
  return jwtDecode(token) as TJwt;
};
