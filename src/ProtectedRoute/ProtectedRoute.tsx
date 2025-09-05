import { useRecoilValue } from "recoil";
import { Navigate, Outlet } from "react-router-dom";

import { authState } from "../context/global.context";

const ProtectedRoute = () => {
  const isAuthenticated = useRecoilValue(authState);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace/>;
};

export default ProtectedRoute;
