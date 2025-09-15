// guards/withAuthGuard.jsx
import { Navigate, Outlet } from "react-router-dom";
import { getFromLocalStorage } from "../utils/localStorage";
import { keyLocalStorage } from "../constants/keyConstant";

const WithAuthGuard = () => {
  const accessToken = getFromLocalStorage(keyLocalStorage.accessToken);
  return accessToken ? <Navigate to="/" replace /> : <Outlet />;
};

export default WithAuthGuard;
