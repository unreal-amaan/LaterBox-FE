import { lazy } from "react";
import { useRecoilValue } from "recoil";
import { Navigate, Outlet } from "react-router-dom";

import { authState } from "../context/global.context";
const Loader = lazy(() => import("@/components/Loader"));

const ProtectedRoute = () => {
  const isAuthenticated = useRecoilValue(authState);

  if (isAuthenticated === null) {
    return (
      <div className="bg-gradient-light dark:bg-gradient-dark flex h-screen w-screen items-center justify-center">
        <Loader fullScreen />
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
