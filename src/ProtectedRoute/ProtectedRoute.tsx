import { useRecoilValue } from "recoil";
import { Navigate, Outlet } from "react-router-dom";

import { authState, isLoadingState } from "../context/global.context";
import Loader from "../components/Loader";

const ProtectedRoute = () => {
  const isAuthenticated = useRecoilValue(authState);
  const isLoading = useRecoilValue(isLoadingState);

  if (isLoading || isAuthenticated === null) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gradient-light dark:bg-gradient-dark">
        <Loader />
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace/>;
};

export default ProtectedRoute;
