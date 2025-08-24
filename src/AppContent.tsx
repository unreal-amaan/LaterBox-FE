import { useRecoilValue } from "recoil";
import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//Context
import { themeState, authState } from "./context/global.context";

//hooks
import { useAuth } from "./hooks/useAuth";

//Components
const Signin = lazy(() => import("./pages/SignInPage/Signin"));
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Home = lazy(() => import("./pages/Home/Home"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute/ProtectedRoute"));

export default function AppContent() {
  const theme = useRecoilValue(themeState);
  const isAuthenticated = useRecoilValue(authState);
  const navigate = useNavigate();
  const location = useLocation();
  const { checkAuth } = useAuth();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated && location.pathname === "/") {
      console.log("Authenticated. Redirecting from / to /home");
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  return (
    <div className="h-screen w-screen">
      <Suspense >
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<LandingPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
