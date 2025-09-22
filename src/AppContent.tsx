import { useRecoilValue } from "recoil";
import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//Context
import { themeState, authState } from "./context/global.context";

//hooks
import { useAuth } from "./hooks/useAuth";

//Components
import Loader from "./components/Loader";
import CategoryView from "./pages/CategoryDetails/CategoryView";

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

  if (isAuthenticated === null) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-gradient-light dark:bg-gradient-dark">
        <Loader fullScreen />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen">
      <Suspense
        fallback={
          <div className="bg-gradient-light dark:bg-gradient-dark flex h-screen w-screen items-center justify-center">
            <Loader fullScreen />
          </div>
        }
      >
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<LandingPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/category/:id" element={<CategoryView />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}
