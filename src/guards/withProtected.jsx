import { getFromLocalStorage } from "../utils/localStorage";
import { keyLocalStorage } from "../constants/keyConstant";
import { Navigate } from "react-router-dom";

const WithProtected = ({ children }) => {
  const accessToken = getFromLocalStorage(keyLocalStorage.accessToken);
  if (!accessToken) {
    return <Navigate to="/auth/login" />;
  }
  return children;
};

export default WithProtected;
