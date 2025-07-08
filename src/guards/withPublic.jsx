import { Navigate } from "react-router-dom";
import { getFromLocalStorage } from "../utils/localStorage";
import { keyLocalStorage } from "../constants/keyConstant";

const WithPublic = ({ children }) => {
  const accessToken = getFromLocalStorage(keyLocalStorage.accessToken);
  if (accessToken) {
    return <Navigate to="/" />;
  }
  return children;
};

export default WithPublic;
