import { useContext } from "react";
import AuthProvider from "./../Contexts/AuthProvider";

const useAuth = () => {
  return useContext(AuthProvider);
};

export default useAuth;
