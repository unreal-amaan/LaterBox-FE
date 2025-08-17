import { useRecoilValue } from "recoil";
import { Navigate, Outlet } from "react-router-dom";

import { authState } from "../context/global.context";
import Loader from "../Loader/Loader";

const ProtectedRoute = () => {
  const isAuthenticated = useRecoilValue(authState);

  console.log("ProtectedRoute isAuthenticated:", isAuthenticated);
  if (isAuthenticated === null) {
    return <Loader />;
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace/>;
};

export default ProtectedRoute;
