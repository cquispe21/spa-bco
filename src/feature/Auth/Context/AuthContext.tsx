import { createContext, ReactNode } from "react";

import useAuth from "../../../application/Auth/useAuth";
import { IAuth } from "../../../domain/AuthDto/auth";
import { useNavigate } from "react-router-dom";

export interface IAuthContext {
  AuthSet: (auth: IAuth) => void;
}

const AuthContext = createContext({});

export const AuthoProvider = ({ children }: { children: ReactNode }) => {
  const { Auth } = useAuth();
  const navigate = useNavigate();

  const AuthSet = async (auth: IAuth) => {
    try {
      const res = await Auth(auth);
      localStorage.setItem("token", res.token);
      setTimeout(() => {
        navigate("/product");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const storage: IAuthContext = {
    AuthSet,
  };

  return (
    <AuthContext.Provider value={storage}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
